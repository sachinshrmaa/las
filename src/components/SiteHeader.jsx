import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/academics", label: "Academics" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader({ themeMode, onThemeToggle }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const themeLabel =
    themeMode === "system"
      ? "Theme: System"
      : themeMode === "light"
        ? "Theme: Light"
        : "Theme: Dark";

  const ThemeIcon = () => {
    if (themeMode === "light") {
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.64 5.64l1.56 1.56M16.8 16.8l1.56 1.56M18.36 5.64 16.8 7.2M7.2 16.8l-1.56 1.56"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (themeMode === "dark") {
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 14.7A8.9 8.9 0 1 1 9.3 3a7.2 7.2 0 0 0 0 11.7A7.2 7.2 0 0 0 21 14.7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 20h8M10 16v4M14 16v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          <span className="brand-name">
            Little Angle Senior Secondary School
          </span>
          <span className="brand-meta">
            English-Medium Senior Secondary School | Est. 1997
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav
          className={`main-nav ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={isActive ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Toggle theme mode. ${themeLabel}`}
            title={themeLabel}
          >
            <ThemeIcon />
            <span className="sr-only">{themeLabel}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
