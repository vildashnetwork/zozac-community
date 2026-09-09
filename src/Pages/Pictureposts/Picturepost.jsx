import React, { useEffect, useState } from "react";
import "./picture.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Picturepost = () => {
  const { id } = useParams();
  const [picture, setpicture] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchPicture = async () => {
      try {
        setloading(true);
        const picturein = await axios.get(
          `https://zozacbackend.onrender.com/admin/picture/post/${id}`
        );
        setpicture(picturein.data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch picture");
      } finally {
        setloading(false);
      }
    };
    fetchPicture();
  }, [id]);

  const shareUrl = picture._id
    ? `https://www.zozac-community.org/picturepost/${picture._id}`
    : "";

  const shareText = picture.title || "Check this post from ZOZAC Community!";
  const content = picture.content || "";

  return (
    <div className="post-page">
      {loading && (
        <div className="post-loading">
          <ClipLoader size={46} color="#1f542f" />
        </div>
      )}

      {!loading && picture._id && (
        <article className="post-article">
          {/* Article header */}
          <header className="post-header">
            {picture.date && <p className="post-eyebrow">{picture.date}</p>}
            <h2 className="post-title">{picture.title}</h2>
          </header>

          {/* Featured image */}
          <figure className="post-media">
            <div className="post-badge">zozac</div>
            <img src={picture.ImageUrl} alt={picture.title || "Post"} />
          </figure>

          {/* Article body */}
          <div className="post-body">
            <p className="post-content">{picture.content}</p>

            {/* Share Buttons */}
            {shareUrl && (
              <div className="post-share">
                <span className="post-share-label">Share:</span>
                <WhatsappShareButton
                  url={shareUrl}
                  title={`${shareText} - ${content}`}
                >
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <FacebookShareButton
                  url={shareUrl}
                  quote={`${shareText} - ${content}`}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </div>
            )}

            {/* Tags */}
            <div className="post-tags">
              <span className="post-tag">innovating</span>
              <span className="post-tag">lives</span>
              <span className="post-tag">at ZOZAC</span>
            </div>

            {/* Price + Button - enable when the API sends a price */}
            {/* <div className="post-price-row">
              <span className="post-price">{picture.price} frs</span>
              <button className="post-buy">
                <span>ZOZAC COMMUNITY</span>
                <svg
                  className="post-buy-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </button>
            </div> */}

            {/* Rating */}
            <div className="post-rating">
              <div className="post-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="post-reviews">245 Reviews</span>
            </div>
          </div>
        </article>
      )}

      {!loading && !picture._id && (
        <div className="post-empty">
          <h2>Post not found</h2>
          <p>This story may have been removed or is temporarily unavailable.</p>
        </div>
      )}
    </div>
  );
};

export default Picturepost;