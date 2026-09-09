import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Partners.css";

// Partner wall - add real partner names and site URLs here when available
const partners = [
  { name: "BLISSZ CONCEPTS G", logo: "/1.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/2.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/3.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/4.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/5.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/6.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/7.jfif" },
];

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const sliderRef = useRef(null);
  const total = partners.length;
  const isOpen = activeIndex >= 0;

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

  const slideBy = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.85, 200);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="partners" aria-labelledby="partners-title">
      <header className="partners-heading">
        <span className="partners-kicker">Partnerships</span>
        <h2 className="partners-title" id="partners-title">Our Partners</h2>
        <p className="partners-intro">
          To our amazing partners - your partnership, collaboration and support
          have been and remain very instrumental in our success. Together, we
          are developing communities, transforming lives, driving meaningful
          change and creating a brighter future for all. Thank you for always
          standing by us and amplifying our impact.
        </p>
      </header>

      <div className="partners-panel">
        <div className="partners-grid-wrap">
          <div className="partners-grid" ref={sliderRef}>
            {partners.map((partner, index) => (
              <button
                type="button"
                className="partners-card"
                key={index}
                title={partner.name}
                onClick={() => setActiveIndex(index)}
                aria-label={`View partner logo: ${partner.name}`}
              >
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              </button>
            ))}
          </div>

          <div className="partners-slider-controls">
            <button
              type="button"
              className="partners-slider-btn partners-slider-btn--prev"
              onClick={() => slideBy(-1)}
              aria-label="Previous partners"
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
              className="partners-slider-btn partners-slider-btn--next"
              onClick={() => slideBy(1)}
              aria-label="Next partners"
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
        </div>
      </div>

      {isOpen && (
        <div
          className="partners-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Partner logo viewer"
          onClick={close}
        >
          <button
            type="button"
            className="partners-lightbox-close"
            onClick={close}
            aria-label="Close partner viewer"
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
            className="partners-lightbox-nav partners-lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous partner"
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

          <figure
            className="partners-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={partners[activeIndex].logo}
              alt={partners[activeIndex].name}
            />
            <figcaption className="partners-lightbox-caption">
              <span>{partners[activeIndex].name}</span>
              <span className="partners-lightbox-counter">
                {activeIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="partners-lightbox-nav partners-lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next partner"
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

export default Partners;