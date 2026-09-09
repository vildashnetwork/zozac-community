import React, { useEffect, useState } from "react";
import "./Video.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import ShareBar from "../../Componennts/Share/ShareBar";

const VideoHero = () => {
  const { id } = useParams();
  const [seevideo, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://zozacbackend.onrender.com/admin/video/post/${id}`
        );
        setVideo(response.data);
      } catch (error) {
        toast.error("Failed to load video");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchVideo();
  }, [id]);

  if (loading)
    return (
      <div className="video-post-page">
        <div className="video-post-loading">
          <ClipLoader size={46} color="#1f542f" />
          <p>Loading video...</p>
        </div>
      </div>
    );

  if (!seevideo)
    return (
      <div className="video-post-page">
        <div className="video-post-empty">
          <h2>Video not found</h2>
          <p>This video may have been removed or is temporarily unavailable.</p>
        </div>
      </div>
    );

  // Canonical page URL - crawlers are served per-post OG tags (title,
  // description, video + poster image) for this URL via the /api/og-video rewrite.
  const shareUrl = `https://www.zozac-community.org/posts/${id}`;
  const shareTitle = seevideo.title || "ZOZAC Community";
  const shareDescription = seevideo.content
    ? `${String(seevideo.content).replace(/\s+/g, " ").trim().slice(0, 199).trim()}...`
    : "Watch stories, activities and impact moments from the ZOZAC Community.";
  // Cloudinary poster frame for the video when no thumbnail exists.
  const sharePoster =
    seevideo.VidUrl && seevideo.VidUrl.includes("/video/upload/")
      ? seevideo.VidUrl.replace("/video/upload/", "/video/upload/so_0/")
      : "https://www.zozac-community.org/logo3.jpg";

  return (
    <div className="video-post-page">
      <article className="video-post-article">
        {/* Article header */}
        <header className="video-post-header">
          {seevideo.date && <p className="video-post-eyebrow">{seevideo.date}</p>}
          <h1 className="video-post-title">{seevideo.title}</h1>
        </header>

        <div className="video-post-grid">
          {/* Video player */}
          <div className="video-post-player">
            <span className="video-post-badge">zozac</span>
            <video
              src={seevideo.VidUrl}
              poster={sharePoster}
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Info card */}
          <aside className="video-post-info">
            <h2 className="video-post-info-title">About this video</h2>
            <p className="video-post-info-text">{seevideo.content}</p>

            {/* Share row: WhatsApp, Facebook, X, Telegram, LinkedIn, Email, copy link + native sheet */}
            <div className="video-post-share">
              <ShareBar
                url={shareUrl}
                title={shareTitle}
                description={shareDescription}
                image={sharePoster}
                label="Share this video"
              />
            </div>

            {/* Extra info */}
            {(seevideo.date || seevideo.price) && (
              <div className="video-post-meta">
                {seevideo.date && (
                  <p>
                    <strong>Release Date:</strong> {seevideo.date}
                  </p>
                )}
                {seevideo.price && (
                  <p>
                    <strong>Price:</strong> {seevideo.price}
                  </p>
                )}
              </div>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
};

export default VideoHero;