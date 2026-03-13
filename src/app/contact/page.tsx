import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact information, directories, operating hours, and map embed for LAS.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Contact Us"
        title="Office contacts, visitor timings, and a location module in one place."
        description="This page is designed to reduce administrative friction for parents by keeping the main contact channels explicit."
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--ink-border)] bg-white shadow-sm">
          <iframe
            title="LAS location map"
            src="https://www.google.com/maps?q=Little+Angel+Senior+Secondary+School&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="space-y-5 rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="School Office"
            title="Reach the right desk without guesswork."
          />
          <div className="space-y-3 text-sm leading-7 text-slate-600">
            <p>{contactDetails.address}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.hours}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {contactDetails.directories.map((directory) => (
          <article
            key={directory.office}
            className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]/55">
              Directory
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--navy)]">
              {directory.office}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {directory.detail}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] bg-[color:var(--navy)] px-8 py-10 text-white shadow-[0_24px_50px_rgba(15,39,71,0.22)]">
        <SectionHeading
          eyebrow="Visitor Hours"
          title="Operating hours are surfaced clearly for families and guests."
          description="Final address, extensions, and map target should be confirmed against the school's official records before launch."
        />
      </section>
    </div>
  );
}
