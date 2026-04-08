import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
  X,
  Youtube,
} from "lucide-react";

const notices = [
  "Admissions open for Nursery to Class XII (Session 2026-27).",
  "Scholarship test for Classes VI-IX on 20 April 2026.",
  "Parent-Teacher interaction week starts from 25 April 2026.",
  "Summer enrichment camp registrations now available.",
];

const groupedLinks = [
  {
    label: "About",
    href: "/about",
    sub: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about" },
      { label: "Awards & Achievements", href: "/about" },
    ],
  },
  {
    label: "Academics",
    href: "/gallery",
    sub: [
      { label: "Primary School", href: "/gallery" },
      { label: "Middle School", href: "/gallery" },
      { label: "Secondary", href: "/gallery" },
      { label: "Senior Secondary", href: "/gallery" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    sub: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Eligibility", href: "/admissions" },
      { label: "Fee Structure", href: "/admissions" },
      { label: "Scholarship", href: "/admissions" },
    ],
  },
  {
    label: "Campus Life",
    href: "/gallery",
    sub: [
      { label: "Infrastructure", href: "/gallery" },
      { label: "Sports", href: "/gallery" },
      { label: "Clubs", href: "/gallery" },
      { label: "Events", href: "/gallery" },
    ],
  },
  { label: "Contact", href: "/contact", sub: null },
];

const socialHandles = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState<string | null>(null);
  const location = useLocation();

  const isGroupActive = (href: string) => location.pathname === href;

  return (
    <>
      <style>{`
        .announcement-wrap { overflow: hidden; }
        .announcement-track { display: flex; white-space: nowrap; animation: ticker 34s linear infinite; }
        .announcement-track:hover { animation-play-state: paused; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="announcement-wrap bg-[#4d9446] py-2">
        <div className="announcement-track">
          {[...notices, ...notices].map((text, index) => (
            <span
              key={`${text}-${index}`}
              className="pr-12 text-xs font-semibold tracking-wide text-amber-100 md:text-sm"
            >
              <Bell className="mr-1 inline h-3.5 w-3.5 text-amber-300" />
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95">
        <div className="container flex items-center justify-between py-1.5">
          <p className="text-[11px] font-medium tracking-wide text-slate-500">
            Follow us for latest updates
          </p>
          <div className="flex items-center gap-1.5">
            {socialHandles.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-green-50 hover:text-[#4d9446]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)]">
        <div className="container flex items-center justify-between py-3.5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Little Angel School logo"
              className="h-12 w-12 rounded-full object-cover shadow-lg shadow-green-900/10 ring-2 ring-white"
            />
            <div>
              <h1 className="text-[1.55rem] font-bold leading-tight tracking-tight text-slate-900">
                Little Angel
              </h1>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] leading-tight text-slate-500">
                Senior Secondary School
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1.5 lg:flex">
            {groupedLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenNav(link.label)}
                onMouseLeave={() => setOpenNav(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isGroupActive(link.href)
                      ? "bg-green-50 text-[#4d9446] shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#4d9446]"
                  }`}
                >
                  {link.label}
                  {link.sub && <ChevronDown className="h-4 w-4 opacity-60" />}
                </Link>

                {link.sub && openNav === link.label && (
                  <div className="absolute left-0 top-full min-w-[230px] rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.32)]">
                    {link.sub.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.href}
                        className="block rounded-xl px-3.5 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#4d9446]"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="inline-flex h-11 min-w-[120px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold leading-none text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9446]/20"
            >
              Contact Us
            </Link>
            <Link
              to="/admissions"
              className="inline-flex h-11 min-w-[132px] items-center justify-center rounded-full bg-gradient-to-r from-[#3f7a3a] to-[#4d9446] px-5 text-sm font-semibold leading-none text-white shadow-md shadow-green-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:from-[#356830] hover:to-[#3f7a3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9446]/30"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-800"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="space-y-2 border-t border-slate-200 bg-white px-6 pb-6 pt-3 lg:hidden">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-2.5 text-sm font-semibold ${
                location.pathname === "/"
                  ? "bg-green-50 text-[#4d9446]"
                  : "text-slate-700"
              }`}
            >
              Home
            </Link>
            {groupedLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2.5 text-sm font-semibold ${
                  isGroupActive(link.href)
                    ? "bg-green-50 text-[#4d9446]"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-center text-sm font-semibold leading-none text-slate-700 shadow-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#3f7a3a] to-[#4d9446] px-3 text-center text-sm font-semibold leading-none text-white shadow-md shadow-green-900/10"
            >
              Apply Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
