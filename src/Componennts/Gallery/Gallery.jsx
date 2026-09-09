import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Gallery.css";


const Gallery = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const isOpen = activeIndex >= 0;
  const total = galleryPhotos.length;
  const sliderRef = useRef(null);
  const [autoPaused, setAutoPaused] = useState(false);
  const stopAutoSlide = useCallback(() => setAutoPaused(true), []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGallery = async () => {
      try {
        setLoading(true);
        setFetchError(false);
        const response = await fetch(
          "https://zozacbackend.onrender.com/admin/picture/post",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Gallery request failed with status ${response.status}`);
        }

        const posts = await response.json();
        const galleryPosts = (Array.isArray(posts) ? posts : [])
          .filter(
            (post) => post?.category === "Gallery" && typeof post.ImageUrl === "string"
          )
          .map((post) => ({
            src: post.ImageUrl,
            alt: post.title || "ZOZAC Community gallery image",
          }));

        setGalleryPhotos(galleryPosts);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch gallery images", error);
          setFetchError(true);
          setGalleryPhotos([]);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchGallery();

    return () => controller.abort();
  }, []);

  const slideBy = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.85, 220);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const close = useCallback(() => setActiveIndex(-1), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % total),
    [total]
  );

  // Auto-advance the mobile slider until the user interacts with it
  useEffect(() => {
    if (autoPaused || isOpen) return undefined;
    const el = sliderRef.current;
    if (!el) return undefined;
    if (typeof window === "undefined") return undefined;
    if (window.innerWidth > 640) return undefined;
    if (el.scrollWidth <= el.clientWidth + 4) return undefined;

    const id = window.setInterval(() => {
      const node = sliderRef.current;
      if (!node) return;
      const step = Math.max(node.clientWidth * 0.85, 220);
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 4;
      if (atEnd) {
        node.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        node.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);

    return () => window.clearInterval(id);
  }, [autoPaused, isOpen]);

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

        <div className="gallery-grid-wrap">
          {loading ? (
            <p className="gallery-status">Loading gallery images...</p>
          ) : fetchError ? (
            <p className="gallery-status">Gallery images could not be loaded.</p>
          ) : galleryPhotos.length === 0 ? (
            <p className="gallery-status">No gallery images are available yet.</p>
          ) : (
            <>
              <div
                className="gallery-grid"
                ref={sliderRef}
                onTouchStart={() => setAutoPaused(true)}
                onWheel={() => setAutoPaused(true)}
              >
                {galleryPhotos.map((photo, index) => (
                  <button
                    type="button"
                    key={`${photo.src}-${index}`}
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

              <div className="gallery-slider-controls">
                <button
                  type="button"
                  className="gallery-slider-btn gallery-slider-btn--prev"
                  onMouseDown={stopAutoSlide}
                  onClick={() => {
                    stopAutoSlide();
                    slideBy(-1);
                  }}
                  aria-label="Previous photos"
                >
                  <svg
                    width="20"
                    height="20"
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
                <button
                  type="button"
                  className="gallery-slider-btn gallery-slider-btn--next"
                  onMouseDown={stopAutoSlide}
                  onClick={() => {
                    stopAutoSlide();
                    slideBy(1);
                  }}
                  aria-label="Next photos"
                >
                  <svg
                    width="20"
                    height="20"
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
            </>
          )}
        </div>
      </div>

      {isOpen &&
        createPortal(
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
          </div>,
          document.body
        )}
    </section>
  );
};

export default Gallery;