import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { galleryFolders, videoLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Event, campus, and achievement gallery structure for Little Angel Senior Secondary School.",
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Gallery"
        title="A media library designed for real LAS photography and event storytelling."
        description="The visual structure is ready for high-resolution school photography, categorized folders, and video highlights."
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Media Folders"
          title="Organized around events, campus life, and achievements."
          description="Replace the placeholders with school-owned imagery rather than generic stock media."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {galleryFolders.map((folder, index) => (
            <article
              key={folder.title}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--ink-border)] bg-white shadow-sm"
            >
              <div
                className={`h-48 ${index === 0 ? "bg-[linear-gradient(135deg,#0f2747,#31578f)]" : index === 1 ? "bg-[linear-gradient(135deg,#d2a84b,#f3e3b5)]" : "bg-[linear-gradient(135deg,#173463,#7ea6d5)]"}`}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[color:var(--navy)]">
                  {folder.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {folder.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[2rem] border border-[color:var(--ink-border)] bg-[linear-gradient(135deg,rgba(15,39,71,0.05),rgba(255,255,255,0.74))] p-8">
        <SectionHeading
          eyebrow="Video Integration"
          title="Ready for YouTube or event highlight embeds."
          description="The final school channel URL can be wired in without changing the page structure."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {videoLinks.map((video) => (
            <div
              key={video}
              className="rounded-[1.5rem] bg-white p-5 shadow-sm"
            >
              <p className="text-sm leading-7 text-slate-600">{video}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
