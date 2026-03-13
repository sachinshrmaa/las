import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  historyStory,
  infrastructureItems,
  leadershipProfiles,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "History, vision, leadership, and infrastructure at Little Angel Senior Secondary School.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="About Us"
        title="The story, people, and spaces behind Little Angel Senior Secondary School."
        description="This section introduces the LAS mission, leadership team, and the infrastructure that supports daily learning and student growth."
      />

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="History and Vision"
            title="An institution designed to educate with rigor and humanity."
          />
        </div>
        <div className="space-y-4">
          {[
            historyStory.founded,
            historyStory.mission,
            historyStory.vision,
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-8 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Visible leadership with academic and institutional focus."
          description="Profiles can later be expanded with real portraits and faculty biographies provided by the school."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {leadershipProfiles.map((profile) => (
            <article
              key={profile.name}
              className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--navy)] text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)]">
                {profile.name
                  .split(" ")
                  .map((segment) => segment[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[color:var(--navy)]">
                {profile.name}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-[color:var(--navy)]/55">
                {profile.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {profile.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[2rem] border border-[color:var(--ink-border)] bg-[linear-gradient(135deg,rgba(15,39,71,0.04),rgba(255,255,255,0.72))] p-8">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Labs, library, sports, and smart classrooms planned as core learning assets."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {infrastructureItems.map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
