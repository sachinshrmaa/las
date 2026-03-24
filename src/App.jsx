import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import "./styles/globals.css";

const THEME_KEY = "la-theme-mode";

function getInitialThemeMode() {
  if (typeof window === "undefined") {
    return "system";
  }

  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark" || saved === "system") {
    return saved;
  }

  return "system";
}

function App() {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const resolvedTheme =
        themeMode === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : themeMode;

      document.documentElement.setAttribute("data-theme", resolvedTheme);
    };

    applyTheme();

    if (themeMode !== "system") {
      return;
    }

    const handleSystemThemeChange = () => applyTheme();
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, themeMode);
    }
  }, [themeMode]);

  const cycleThemeMode = () => {
    setThemeMode((current) => {
      if (current === "system") return "light";
      if (current === "light") return "dark";
      return "system";
    });
  };

  return (
    <Router>
      <div className="la-root">
        <div className="la-orb la-orb-1" />
        <div className="la-orb la-orb-2" />
        <SiteHeader themeMode={themeMode} onThemeToggle={cycleThemeMode} />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
