import type { Metadata } from "next";

import { AcademicCalendar } from "@/components/academic-calendar";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  curriculumLevels,
  departments,
  pedagogyPoints,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Curriculum, pedagogy, departments, and calendar information for LAS.",
};

export default function AcademicsPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Academics"
        title="Curriculum clarity with room for ambition, practice, and progression."
        description="The academics section is organized by level, teaching philosophy, calendar visibility, and department strengths."
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Curriculum"
          title="A clear breakdown from primary foundations to senior specialization."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {curriculumLevels.map((level) => (
            <article
              key={level.level}
              className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]/55">
                {level.level}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {level.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Pedagogy"
            title="Teaching that keeps academic standards high without losing the human side of learning."
          />
          <div className="mt-6 space-y-4">
            {pedagogyPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] bg-[color:var(--surface-soft)] p-4"
              >
                <p className="text-sm leading-7 text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[color:var(--ink-border)] bg-[color:var(--navy)] p-8 text-white shadow-[0_24px_50px_rgba(15,39,71,0.22)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
            Departments
          </p>
          <div className="mt-6 space-y-5">
            {departments.map((department) => (
              <div
                key={department.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5"
              >
                <h3 className="text-2xl font-semibold">{department.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  {department.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Academic Calendar"
          title="Download-ready structure with an interactive monthly view."
          description="The PDF slot is marked clearly for the final school-issued academic calendar upload."
        />
        <AcademicCalendar />
      </section>
    </div>
  );
}
