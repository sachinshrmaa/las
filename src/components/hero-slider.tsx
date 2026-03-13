"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { heroSlides } from "@/lib/site-content";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="relative left-1/2 right-1/2 -mt-6 w-screen -translate-x-1/2 overflow-hidden text-white shadow-[0_24px_70px_rgba(7,22,47,0.32)] sm:-mt-8">
      <Image
        src={activeSlide.imageSrc}
        alt={activeSlide.accent}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,22,47,0.82)_12%,rgba(7,22,47,0.65)_45%,rgba(7,22,47,0.32)_75%,rgba(7,22,47,0.78)_100%)]" />

      <div className="relative mx-auto grid min-h-[70vh] max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:min-h-[76vh] lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">
            {activeSlide.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--navy)] transition hover:translate-y-[-1px]"
            >
              Start Admissions Inquiry
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore LAS
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {heroSlides.map((slide, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[1.5rem] border p-5 text-left transition ${
                  active
                    ? "border-[color:var(--gold)]/65 bg-white/16 shadow-[0_18px_36px_rgba(0,0,0,0.24)]"
                    : "border-white/20 bg-black/24 hover:bg-black/36"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                  {slide.accent}
                </p>
                <p className="mt-3 text-lg font-semibold">{slide.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {slide.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
