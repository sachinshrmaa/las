"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Student-led morning assembly",
    text: "Weekly assembly focused on values, current affairs, and leadership.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Modern science laboratories",
    text: "Hands-on practical sessions aligned with Maharashtra board curriculum.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Career guidance and mentoring",
    text: "Guidance for NEET, JEE, CA Foundation, CUET, and undergraduate admissions.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prevIndex) => (prevIndex + 1) % slides.length);

  return (
    <div className="slider" aria-label="School highlights">
      {slides.map((slide, index) => (
        <article
          key={slide.title}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-caption">
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </div>
        </article>
      ))}

      <div className="slider-controls">
        <button type="button" aria-label="Previous slide" onClick={prev}>
          ←
        </button>
        <button type="button" aria-label="Next slide" onClick={next}>
          →
        </button>
      </div>

      <div className="slider-dots" role="tablist" aria-label="Choose slide">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
