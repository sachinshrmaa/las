import Link from "next/link";

import { HeroSlider } from "@/components/hero-slider";
import { NoticeTicker } from "@/components/notice-ticker";
import { SectionHeading } from "@/components/section-heading";
import {
  eventHighlights,
  notices,
  principalMessage,
  quickLinks,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="space-y-16 pb-10">
      <HeroSlider />

      <NoticeTicker />

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--navy)]/60">
            Principal's Welcome
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--navy)]">
            A culture of achievement with care at the center.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {principalMessage.snippet}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-[color:var(--ink-border)] pt-5">
            <div>
              <p className="font-semibold text-[color:var(--navy)]">
                {principalMessage.name}
              </p>
              <p className="text-sm text-slate-500">{principalMessage.role}</p>
            </div>
            <Link
              href="/about"
              className="rounded-full border border-[color:var(--ink-border)] px-4 py-2 text-sm font-semibold text-[color:var(--navy)]"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {notices.map((notice) => (
            <article
              key={notice.title}
              className={`rounded-[1.75rem] border p-6 shadow-sm ${
                notice.urgent
                  ? "border-[color:var(--gold)]/50 bg-[linear-gradient(180deg,#fff8e8,#ffffff)]"
                  : "border-[color:var(--ink-border)] bg-white"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]/55">
                {notice.date}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--navy)]">
                {notice.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {notice.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Quick Links"
          title="Critical parent actions without the clutter."
          description="The home page keeps operational tasks visible so admissions, payments, and communication pathways are never buried."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,39,71,0.12)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--navy)]/55">
                Direct Access
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--navy)]">
                {link.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {link.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-[color:var(--navy)] group-hover:text-[#12315c]">
                Open section
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-[color:var(--ink-border)] bg-[linear-gradient(135deg,rgba(15,39,71,0.05),rgba(255,255,255,0.7))] p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Life at LAS"
          title="Built to feel like a school community, not a brochure."
          description="Each section gives families a clearer sense of student life, from events and clubs to day-to-day routines and achievement moments."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {eventHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-[1.5rem] bg-white p-5 shadow-sm"
            >
              <p className="text-sm leading-7 text-slate-600">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] bg-[color:var(--navy)] px-8 py-10 text-white shadow-[0_24px_50px_rgba(15,39,71,0.25)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              Next Steps
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              The structure is ready for real photos, faculty bios, and hosting
              credentials.
            </h2>
          </div>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--navy)]"
          >
            Review Admissions Page
          </Link>
        </div>
      </section>
    </div>
  );
}
