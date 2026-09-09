// Server-rendered Open Graph page for picture posts.
// Social crawlers (WhatsApp, Facebook, X/Twitter, Telegram, LinkedIn) do not
// run JavaScript, so they never see the React SPA. This function fetches the
// post from the backend and returns minimal HTML carrying og:* / twitter:*
// meta tags (title, description, image). Human visitors are redirected to the
// real React route via a meta refresh + JS fallback.
const BACKEND = "https://zozacbackend.onrender.com";
const SITE = "https://www.zozac-community.org";
const FALLBACK_IMAGE = `${SITE}/logo3.jpg`;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function snippet(text, max = 200) {
  const clean = String(text ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export default async function handler(req, res) {
  const { id } = req.query;

  let title = "ZOZAC Community";
  let description =
    "ZOZAC Community is a non-profit organization empowering African youth and local communities through leadership, vocational training, digital skills, and sustainable development.";
  let image = FALLBACK_IMAGE;

  try {
    const r = await fetch(`${BACKEND}/admin/picture/post/${id}`);
    if (r.ok) {
      const post = await r.json();
      if (post?.title) title = `${post.title} | ZOZAC Community`;
      if (post?.content) description = snippet(post.content);
      if (post?.ImageUrl) image = post.ImageUrl;
    }
  } catch {
    // Fall back to generic tags rather than failing the share scrape.
  }

  const pageUrl = `${SITE}/picturepost/${id}`;
  const safe = {
    title: escapeHtml(title),
    description: escapeHtml(description),
    image: escapeHtml(image),
    url: escapeHtml(pageUrl),
  };

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${safe.title}</title>
<meta name="description" content="${safe.description}" />
<link rel="canonical" href="${safe.url}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="ZOZAC Community" />
<meta property="og:url" content="${safe.url}" />
<meta property="og:title" content="${safe.title}" />
<meta property="og:description" content="${safe.description}" />
<meta property="og:image" content="${safe.image}" />
<meta property="og:image:alt" content="${safe.title}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="${safe.url}" />
<meta name="twitter:title" content="${safe.title}" />
<meta name="twitter:description" content="${safe.description}" />
<meta name="twitter:image" content="${safe.image}" />
<meta http-equiv="refresh" content="0;url=${safe.url}" />
</head>
<body>
<p><a href="${safe.url}">Continue to this ZOZAC Community story…</a></p>
<script>window.location.replace(${JSON.stringify(pageUrl)});</script>
</body>
</html>`);
}
