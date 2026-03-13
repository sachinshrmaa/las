"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationItems } from "@/lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--navy)]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--gold)]/50 bg-white/8 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
            LAS
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--gold)]">
              Little Angel
            </p>
            <p className="text-base font-semibold text-white">
              Senior Secondary School
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col border-b border-white/10 bg-[color:var(--navy)] px-5 py-4 md:static md:flex md:w-auto md:flex-row md:border-none md:bg-transparent md:p-0`}
        >
          {navigationItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-[color:var(--navy)]"
                    : "text-white/78 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
