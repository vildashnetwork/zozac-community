import React, { useEffect, useState } from "react";
import "./ShareBar.css";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FaCheck, FaLink, FaShareAlt } from "react-icons/fa";

const ICON_SIZE = 40;

// Keep a single meta tag in sync (create it if the template lacks it).
function upsertMeta(attr, name, content) {
  if (!content) return;
  const selector = `meta[${attr}="${name}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

// Crawlers ignore this (they never run JS) — the /api/og-* endpoints serve
// them instead. This keeps in-app browsers, tab titles and pasted-link
// previews accurate for real visitors.
function useLiveMeta({ title, description, image, url }) {
  useEffect(() => {
    if (title) document.title = `${title} | ZOZAC Community`;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    if (url) canonical.setAttribute("href", url);
  }, [title, description, image, url]);
}

const ShareBar = ({ url, title, description, image, label = "Share this story", tone = "light" }) => {
  const [copied, setCopied] = useState(false);
  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  useLiveMeta({ title, description, image, url });

  if (!url) return null;

  const message = description ? `${title} — ${description}` : title;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, text: message, url });
    } catch {
      // User dismissed the sheet — nothing to do.
    }
  };

  return (
    <div className={`sharebar${tone === "dark" ? " sharebar-dark" : ""}`} role="group" aria-label={label}>
      <span className="sharebar-label">{label}:</span>
      <div className="sharebar-buttons">
        <WhatsappShareButton url={url} title={message} aria-label="Share on WhatsApp">
          <WhatsappIcon size={ICON_SIZE} round />
        </WhatsappShareButton>
        <FacebookShareButton url={url} quote={message} aria-label="Share on Facebook">
          <FacebookIcon size={ICON_SIZE} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={message} aria-label="Share on X">
          <TwitterIcon size={ICON_SIZE} round />
        </TwitterShareButton>
        <TelegramShareButton url={url} title={message} aria-label="Share on Telegram">
          <TelegramIcon size={ICON_SIZE} round />
        </TelegramShareButton>
        <LinkedinShareButton url={url} title={title} summary={description} aria-label="Share on LinkedIn">
          <LinkedinIcon size={ICON_SIZE} round />
        </LinkedinShareButton>
        <EmailShareButton url={url} subject={title} body={message} aria-label="Share by email">
          <EmailIcon size={ICON_SIZE} round />
        </EmailShareButton>
        <button
          type="button"
          className={`sharebar-circle${copied ? " sharebar-copied" : ""}`}
          onClick={copyLink}
          aria-label={copied ? "Link copied" : "Copy link"}
          title={copied ? "Copied!" : "Copy link"}
        >
          {copied ? <FaCheck /> : <FaLink />}
        </button>
        {canNativeShare && (
          <button
            type="button"
            className="sharebar-circle"
            onClick={nativeShare}
            aria-label="More sharing options"
            title="More options"
          >
            <FaShareAlt />
          </button>
        )}
      </div>
      {copied && <span className="sharebar-hint">Link copied to clipboard</span>}
    </div>
  );
};

export default ShareBar;
