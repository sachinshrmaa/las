import Link from "next/link";

import { navigationItems } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[color:var(--ink-border)] bg-[color:var(--navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">
            Little Angel Senior Secondary School
          </p>
          <p className="max-w-xl text-sm leading-7 text-white/72">
            A modern school website concept focused on accessibility, school
            culture, and operational clarity for parents, students, and staff.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/88">
            Navigate
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/88">
            Operations
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/72">
            <p>
              HTTPS and automated backups should be configured at hosting level.
            </p>
            <p>
              Admissions inquiries are stored locally in data/inquiries.json for
              handoff or future database migration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
