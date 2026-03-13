import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  admissionSteps,
  feeStructure,
  requiredDocuments,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admissions procedure, fee structure, and inquiry form for LAS.",
};

export default function AdmissionsPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Admissions"
        title="A clearer path from first inquiry to confirmed enrollment."
        description="This page combines procedure, fee transparency, required documents, and a working inquiry submission form."
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8 rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Procedure"
            title="Step-by-step guidance for joining LAS."
          />
          <div className="space-y-4">
            {admissionSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[1.5rem] bg-[color:var(--surface-soft)] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--navy)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-[color:var(--ink-border)] bg-[linear-gradient(135deg,rgba(210,168,75,0.12),rgba(255,255,255,0.9))] p-8">
          <SectionHeading
            eyebrow="Fee Structure"
            title="Transparent headings that can be finalized with exact school amounts."
          />
          <div className="space-y-3">
            {feeStructure.map((fee) => (
              <div
                key={fee.item}
                className="flex items-center justify-between rounded-[1.25rem] bg-white px-5 py-4 shadow-sm"
              >
                <span className="font-semibold text-[color:var(--navy)]">
                  {fee.item}
                </span>
                <span className="text-sm text-slate-600">{fee.value}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]/55">
              Required Documents
            </p>
            <div className="mt-4 space-y-3">
              {requiredDocuments.map((document) => (
                <div
                  key={document}
                  className="rounded-[1.25rem] bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-sm leading-7 text-slate-600">{document}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Online Inquiry Form"
          title="Lead capture is already connected to local record storage."
          description="For production, this storage layer can be swapped with a managed database or CMS-backed pipeline without changing the form UX."
        />
        <InquiryForm />
      </section>
    </div>
  );
}
