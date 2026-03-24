"use client";

import { useEffect, useState } from "react";

const images = [
  {
    thumb:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1500&q=80",
    alt: "Students studying in a higher secondary classroom",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1500&q=80",
    alt: "School building and courtyard",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1500&q=80",
    alt: "Students in science practical lab",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1500&q=80",
    alt: "Students during school annual program",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80",
    alt: "Computer lab teaching session",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1500&q=80",
    alt: "Faculty mentoring students",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1500&q=80",
    alt: "Library reading hour",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80",
    alt: "Students participating in sports",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    full: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1500&q=80",
    alt: "Career guidance workshop",
  },
];

export default function GalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeImage = activeIndex >= 0 ? images[activeIndex] : null;

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveIndex(-1);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={image.full}
            type="button"
            aria-label={`Open image ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.thumb} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      <div
        className={`lightbox ${activeImage ? "active" : ""}`}
        aria-hidden={!activeImage}
        role="dialog"
        aria-modal="true"
        aria-label="Expanded gallery image"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setActiveIndex(-1);
          }
        }}
      >
        <button
          type="button"
          aria-label="Close image"
          onClick={() => setActiveIndex(-1)}
        >
          ×
        </button>
        {activeImage ? (
          <img src={activeImage.full} alt={activeImage.alt} />
        ) : null}
      </div>
    </>
  );
}
