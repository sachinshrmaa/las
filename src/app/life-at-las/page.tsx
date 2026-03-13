import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  clubs,
  eventHighlights,
  houseSystem,
  sportsPrograms,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Life at LAS",
  description:
    "Student council, clubs, sports, and events that shape daily life at LAS.",
};

export default function LifeAtLasPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Life at LAS"
        title="A fuller picture of student leadership, clubs, sports, and event culture."
        description="This page captures the atmosphere families usually try to infer between the lines: energy, belonging, and student ownership."
      />

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8 rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Student Council"
            title="Leadership through houses, responsibility, and visible participation."
          />
          <div className="space-y-4">
            {houseSystem.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] bg-[color:var(--surface-soft)] p-5"
              >
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[color:var(--ink-border)] bg-[linear-gradient(135deg,rgba(15,39,71,0.04),rgba(255,255,255,0.74))] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--navy)]/60">
            Clubs and Societies
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {clubs.map((club) => (
              <div
                key={club}
                className="rounded-[1.5rem] bg-white p-5 shadow-sm"
              >
                <p className="text-lg font-semibold text-[color:var(--navy)]">
                  {club}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Sports"
          title="Coaching, discipline, and achievement beyond the classroom."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {sportsPrograms.map((sport) => (
            <article
              key={sport.name}
              className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]/55">
                Programme
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--navy)]">
                {sport.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {sport.highlight}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[2rem] bg-[color:var(--navy)] p-8 text-white shadow-[0_24px_50px_rgba(15,39,71,0.22)]">
        <SectionHeading
          eyebrow="Events"
          title="Annual Day, Sports Meet, and inter-school opportunities remain visible as part of the school identity."
          description="Families should be able to sense rhythm and vibrancy from the site, not just see a list of facilities."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {eventHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5"
            >
              <p className="text-sm leading-7 text-white/78">{highlight}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
