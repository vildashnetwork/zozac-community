import React, { useCallback, useEffect, useState } from "react";
import "./Gallery.css";

import photo1 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.27_4c175dfb.jpg";
import photo2 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.29_8f52353b.jpg";
import photo3 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.30_441aaa22.jpg";
import photo4 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.32_59085943.jpg";
import photo5 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.35_3aa4d729.jpg";
import photo6 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.40_474fb199.jpg";

const galleryPhotos = [
  { src: photo1, alt: "ZOZAC Community members together at a gathering" },
  { src: photo2, alt: "ZOZAC Community outreach in action" },
  { src: photo3, alt: "Community members celebrating a milestone" },
  { src: photo4, alt: "ZOZAC team engaging with the community" },
  { src: photo5, alt: "ZOZAC Community gathering and dialogue" },
  { src: photo6, alt: "Youth empowerment moment at ZOZAC" },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const isOpen = activeIndex >= 0;
  const total = galleryPhotos.length;

  const close = useCallback(() => setActiveIndex(-1), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % total),
    [total]
  );

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, showPrev, showNext]);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-shell">
        <header className="gallery-heading">
          <span className="gallery-kicker">Moments</span>
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-intro">
            Glimpses of ZOZAC Community in action - the gatherings, the
            outreach, and the everyday moments of togetherness. Click any
            photo to view it, then use the arrows or your keyboard to browse.
          </p>
        </header>

        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              className={`gallery-item${index % 3 === 0 ? " gallery-item--tall" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photo ${index + 1} of ${total}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery-item-veil" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Close photo viewer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryPhotos[activeIndex].src}
              alt={galleryPhotos[activeIndex].alt}
            />
            <figcaption className="lightbox-caption">
              <span>{galleryPhotos[activeIndex].alt}</span>
              <span className="lightbox-counter">
                {activeIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;