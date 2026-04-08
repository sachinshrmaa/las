import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  CalendarDays,
  CircleCheck,
  FileText,
  MapPin,
  Phone,
  ChevronDown,
  GraduationCap,
  Award,
  Users,
  Building2,
  ArrowRight,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchContentStore } from "@/lib/contentStore";

const notices = [
  "Admissions open for Nursery to Class XII (Session 2026-27).",
  "Scholarship test for Classes VI–IX on 20 April 2026.",
  "Parent-Teacher interaction week starts from 25 April 2026.",
  "Summer enrichment camp registrations now available.",
];

const academicStreams = [
  {
    level: "Primary School",
    details: "Foundational literacy, numeracy, activity-based learning",
    icon: "🌱",
  },
  {
    level: "Middle School",
    details: "STEM labs, language development, arts and sports",
    icon: "🔬",
  },
  {
    level: "Secondary",
    details: "Board-focused mentoring, practical learning, life skills",
    icon: "📚",
  },
  {
    level: "Senior Secondary",
    details: "Science, Commerce and Humanities guidance pathways",
    icon: "🎓",
  },
];

const highlights = [
  "English-medium instruction with value-based education",
  "Experienced teachers with regular academic tracking",
  "Computer lab, science lab, library and smart classrooms",
  "Safe campus, transport support and student counseling",
];

const whyCards = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Academic Excellence",
    desc: "Consistent board results with personalised mentoring for every student.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced Faculty",
    desc: "85+ dedicated educators committed to holistic student development.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Modern Infrastructure",
    desc: "Smart classrooms, well-equipped labs, and a safe campus environment.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "All-Round Growth",
    desc: "Sports, arts, clubs and co-curricular activities for every learner.",
  },
];

const faqs = [
  {
    q: "What is Little Angel Senior Secondary School?",
    a: "Little Angel Senior Secondary School is an English-medium institution offering classes from Nursery to Class XII, committed to value-based education and academic excellence for over 25 years.",
  },
  {
    q: "What are the admission requirements?",
    a: "Applicants need to submit a birth certificate, previous year marksheet, passport-sized photographs, and complete the application form available online or at the school office.",
  },
  {
    q: "What streams are offered at the Senior Secondary level?",
    a: "We offer Science, Commerce, and Humanities streams at the +2 level with dedicated subject teachers, labs, and guidance for competitive examinations.",
  },
  {
    q: "Is transport facility available?",
    a: "Yes, we provide transport support covering major routes in the area. Details can be obtained from the school office.",
  },
  {
    q: "Are there scholarships available?",
    a: "Yes, a Scholarship Test is conducted for Classes VI–IX. Eligible students based on merit receive fee concessions for the academic session.",
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [newsItems, setNewsItems] = useState<string[]>([]);
  const [eventItems, setEventItems] = useState<
    { title: string; date: string; location: string }[]
  >([]);
  const statsRef = useRef<HTMLDivElement>(null);

  const students = useCountUp(1200, 1800, statsVisible);
  const faculty = useCountUp(85, 1800, statsVisible);
  const years = useCountUp(25, 1800, statsVisible);

  useEffect(() => {
    fetchContentStore().then((data) => {
      setNewsItems(data.news.map((n) => n.title));
      setEventItems(
        data.events.map((event) => ({
          title: event.title,
          date: event.date,
          location: event.location,
        })),
      );
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Outfit', 'DM Sans', sans-serif",
        background: "#fff",
        color: "#1a1a1a",
      }}
    >
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --primary: #4d9446;
          --primary-dark: #3f7a3a;
          --accent: #f59e0b;
          --accent-light: #fef3c7;
          --bg: #fff;
          --surface: #f8faff;
          --border: #e2e8f0;
          --text: #1a1a2e;
          --muted: #64748b;
          --dark: #0f172a;
        }
        a { color: inherit; text-decoration: none; }
        .hero-bg {
          background:
            linear-gradient(125deg, rgba(15, 23, 42, 0.8) 0%, rgba(77, 148, 70, 0.68) 55%, rgba(63, 122, 58, 0.75) 100%),
            url("/la.jpeg") center/cover no-repeat;
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(245,158,11,0.12) 0%, transparent 70%);
        }
        .hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .stat-card {
          background: rgba(255,255,255,0.08); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px; padding: 20px 28px; text-align: center;
          transition: transform 0.2s, background 0.2s;
        }
        .stat-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.13); }
        .section-label {
          display: inline-flex; align-items: center; gap: 6px;
          background: #effaf0; color: var(--primary);
          border: 1px solid #cce8c8; border-radius: 100px;
          padding: 4px 14px; font-size: 12px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .card {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 16px; padding: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .card:hover { box-shadow: 0 8px 32px rgba(77,148,70,0.1); transform: translateY(-2px); }
        .btn-primary {
          background: var(--primary); color: #fff;
          padding: 12px 24px; border-radius: 10px; font-weight: 600; font-size: 14px;
          display: inline-flex; align-items: center; gap-8px;
          transition: background 0.15s, transform 0.15s; cursor: pointer; border: none;
        }
        .btn-primary:hover { background: var(--primary-dark); transform: translateY(-1px); }
        .btn-outline {
          background: #fff; color: var(--primary);
          padding: 12px 24px; border-radius: 10px; font-weight: 600; font-size: 14px;
          border: 1.5px solid var(--primary);
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.15s; cursor: pointer;
        }
        .btn-outline:hover { background: #effaf0; }
        .notice-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 16px; border-radius: 10px;
          border: 1px solid var(--border); background: var(--surface);
          transition: border-color 0.15s, background 0.15s;
        }
        .notice-item:hover { border-color: #a8d6a3; background: #f1faef; }
        .why-card {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 16px; padding: 28px 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: all 0.25s;
        }
        .why-card:hover { border-color: var(--primary); box-shadow: 0 8px 32px rgba(77,148,70,0.12); transform: translateY(-4px); }
        .icon-box {
          width: 48px; height: 48px; border-radius: 12px;
          background: #effaf0; color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
        .faq-q {
          width: 100%; background: none; border: none; text-align: left;
          padding: 18px 20px; font-size: 15px; font-weight: 600; color: var(--text);
          cursor: pointer; display: flex; justify-content: space-between; align-items: center;
          transition: background 0.15s;
        }
        .faq-q:hover { background: var(--surface); }
        .faq-a { padding: 0 20px 18px; font-size: 14px; color: var(--muted); line-height: 1.7; }
        .cta-banner {
          background: linear-gradient(135deg, #4d9446 0%, #3f7a3a 100%);
          position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: ''; position: absolute; right: -60px; top: -60px;
          width: 300px; height: 300px; border-radius: 50%;
          background: rgba(245,158,11,0.15);
        }
        .stream-card {
          border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px;
          display: flex; align-items: flex-start; gap: 14px;
          background: var(--bg); transition: all 0.2s;
        }
        .stream-card:hover { border-color: #a8d6a3; background: #f1faef; }
        .stream-icon { font-size: 22px; line-height: 1; margin-top: 2px; }
        .contact-card {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 14px; padding: 20px;
          display: flex; align-items: flex-start; gap: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .contact-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: #effaf0; color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 40px;
          max-width: 480px;
        }
        .notice-admissions-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 28px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }
        .programs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 48px;
          align-items: start;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .hero-actions,
        .cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .contact-title {
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 28px;
        }
        .section-heading {
          margin-top: 14px;
          font-size: 34px;
          font-weight: 900;
          color: var(--text);
        }
        .programs-heading {
          margin-top: 14px;
          font-size: 32px;
          font-weight: 900;
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .hero-title { font-size: 28px !important; }
          .section-heading,
          .programs-heading,
          .contact-title { font-size: 26px !important; }
          .home-stats-grid { grid-template-columns: 1fr; max-width: 100%; }
          .notice-admissions-grid,
          .why-grid,
          .programs-grid,
          .faq-grid,
          .contact-grid { grid-template-columns: 1fr; }
          .hero-actions a,
          .cta-actions a {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .cta-wrap { align-items: flex-start; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .contact-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .notice-admissions-grid,
          .programs-grid,
          .faq-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Utility Bar
      <div style={{ background: "#3f7a3a", padding: "8px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            {["Careers", "Notice Board", "Student Login", "Contact Us"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  style={{ color: "#d5f0d1", fontSize: 12, fontWeight: 500 }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#d5f0d1")
                  }
                >
                  {l}
                </a>
              ),
            )}
          </div>
          <div style={{ display: "flex", gap: 10 }} className="hide-mobile">
            <span style={{ color: "#d5f0d1", fontSize: 12 }}>
              📞 +91 98765 43210
            </span>
            <span style={{ color: "#d5f0d1", fontSize: 12 }}>
              ✉️ office@littleangel.edu.in
            </span>
          </div>
        </div>
      </div> */}

      {/* Hero */}
      <section className="hero-bg" style={{ padding: "80px 0 60px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              background: "rgba(245,158,11,0.2)",
              color: "#fbbf24",
              border: "1px solid rgba(245,158,11,0.4)",
              borderRadius: 100,
              padding: "5px 16px",
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Affiliated School Information Portal
          </span>

          <h1
            className="hero-title"
            style={{
              marginTop: 20,
              fontSize: 48,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.12,
              maxWidth: 700,
              fontFamily: "'Lora', serif",
            }}
          >
            Little Angel
            <br />
            <span style={{ color: "#fbbf24" }}>Senior Secondary</span>
            <br />
            School
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: 580,
              fontSize: 16,
              color: "#d5f0d1",
              lineHeight: 1.75,
            }}
          >
            A student-focused learning environment committed to academic
            excellence, character building, and all-round growth from
            foundational years to board classes.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="home-stats-grid">
            {[
              {
                label: "Students Enrolled",
                value: `${students.toLocaleString()}+`,
              },
              { label: "Faculty Members", value: `${faculty}+` },
              { label: "Years of Service", value: `${years}+` },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div
                  style={{ fontSize: 30, fontWeight: 900, color: "#fbbf24" }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#b9e1b5",
                    marginTop: 4,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36 }} className="hero-actions">
            <Link
              to="/admissions"
              style={{
                background: "#f59e0b",
                color: "#1a1a2e",
                padding: "13px 28px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Apply for Admission{" "}
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              to="/contact"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "13px 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 14,
                backdropFilter: "blur(8px)",
              }}
            >
              Contact Office
            </Link>
          </div>

          {/* Badges */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {[
              "CBSE Affiliated",
              "NEP 2020 Ready",
              "25+ Years Legacy",
              "English Medium",
            ].map((b) => (
              <span
                key={b}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#e2e8f0",
                  padding: "6px 14px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                ✦ {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notices + Admissions Sidebar */}
      <section style={{ background: "var(--surface)", padding: "64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="notice-admissions-grid">
            {/* Notices */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                <div className="icon-box">
                  <CalendarDays style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800 }}>
                    Latest Notices
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>
                    Session 2026–27
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {newsItems.length > 0 ? (
                  newsItems.map((notice, i) => (
                    <div key={i} className="notice-item">
                      <CircleCheck
                        style={{
                          width: 16,
                          height: 16,
                          flexShrink: 0,
                          color: "var(--primary)",
                          marginTop: 2,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "var(--text)",
                        }}
                      >
                        {notice}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="notice-item">
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>
                      No notices available.
                    </span>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "var(--primary)",
                }}
              >
                View All Notices{" "}
                <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </div>

            {/* Admissions Card */}
            <div
              style={{
                background: "var(--primary)",
                borderRadius: 16,
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -30,
                  top: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 20,
                  bottom: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    background: "#fef3c7",
                    color: "#92400e",
                    borderRadius: 100,
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  ADMISSIONS 2026
                </span>
                <h3
                  style={{
                    marginTop: 14,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.2,
                  }}
                >
                  Secure Your Child's Future Today
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 13.5,
                    color: "#d5f0d1",
                    lineHeight: 1.65,
                  }}
                >
                  Application forms available online and at the school office.
                  Limited seats in selected grades.
                </p>
                <div
                  style={{
                    marginTop: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {(eventItems.length > 0
                    ? eventItems.map(
                        (event) =>
                          `${event.title} • ${event.date} • ${event.location}`,
                      )
                    : ["No events available."]
                  ).map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <CircleCheck
                        style={{
                          width: 15,
                          height: 15,
                          color: "#fbbf24",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      <span style={{ fontSize: 13, color: "#e0e7ff" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/admissions"
                  style={{
                    marginTop: 22,
                    display: "inline-block",
                    background: "#f59e0b",
                    color: "#1a1a2e",
                    padding: "11px 22px",
                    borderRadius: 9,
                    fontSize: 13.5,
                    fontWeight: 700,
                  }}
                >
                  View Admission Process →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">
              <Star style={{ width: 13, height: 13 }} /> Why Families Choose Us
            </span>
            <h2
              style={{
                marginTop: 14,
                fontSize: 34,
                fontWeight: 900,
                color: "var(--text)",
              }}
            >
              An Education That Goes Beyond Textbooks
            </h2>
            <p
              style={{
                marginTop: 10,
                maxWidth: 520,
                margin: "10px auto 0",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              We believe education is more than grades — it's about shaping
              confident, curious, and capable young minds.
            </p>
          </div>

          <div className="why-grid">
            {whyCards.map((c, i) => (
              <div key={i} className="why-card">
                <div className="icon-box">{c.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights Row */}
          <div
            style={{
              marginTop: 32,
              background: "var(--surface)",
              borderRadius: 16,
              padding: "24px 28px",
              border: "1px solid var(--border)",
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flex: "1 1 240px",
                }}
              >
                <CircleCheck
                  style={{
                    width: 16,
                    height: 16,
                    color: "#16a34a",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13.5, fontWeight: 500 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section style={{ background: "var(--surface)", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="programs-grid">
            <div>
              <span className="section-label">
                <BookOpen style={{ width: 13, height: 13 }} /> Academic Programs
              </span>
              <h2 className="programs-heading">
                Structured Learning
                <br />
                At Every Stage
              </h2>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                From foundational years to board examination preparation, our
                curriculum evolves with each student's growth journey.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginTop: 28,
                }}
              >
                {academicStreams.map((s, i) => (
                  <div key={i} className="stream-card">
                    <span className="stream-icon">{s.icon}</span>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          marginBottom: 3,
                        }}
                      >
                        {s.level}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)" }}>
                        {s.details}
                      </div>
                    </div>
                    <ArrowRight
                      style={{
                        width: 15,
                        height: 15,
                        color: "var(--primary)",
                        marginLeft: "auto",
                        flexShrink: 0,
                        opacity: 0.6,
                        marginTop: 4,
                      }}
                    />
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="btn-primary"
                style={{
                  marginTop: 24,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Explore All Programs{" "}
                <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
            </div>

            {/* Office Hours + Quick Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                className="card"
                style={{ background: "#0f172a", border: "none" }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#64748b",
                    marginBottom: 12,
                  }}
                >
                  Office Hours
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>
                  8:30 AM – 3:30 PM
                </div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
                  Monday to Saturday
                </div>
                <div
                  style={{ marginTop: 20, height: 1, background: "#1e293b" }}
                />
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                  >
                    <Phone
                      style={{ width: 15, height: 15, color: "#60a5fa" }}
                    />
                    <span style={{ color: "#94a3b8", fontSize: 13 }}>
                      +91 98765 43210
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                  >
                    <FileText
                      style={{ width: 15, height: 15, color: "#60a5fa" }}
                    />
                    <span style={{ color: "#94a3b8", fontSize: 13 }}>
                      office@littleangel.edu.in
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                  >
                    <MapPin
                      style={{ width: 15, height: 15, color: "#60a5fa" }}
                    />
                    <span style={{ color: "#94a3b8", fontSize: 13 }}>
                      Village Nandok, District Office Road
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="card"
                style={{
                  background: "linear-gradient(135deg,#fef3c7,#fffbeb)",
                  border: "1px solid #fcd34d",
                }}
              >
                <div
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      background: "#f59e0b",
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Award style={{ width: 20, height: 20, color: "#fff" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: 16,
                        color: "#78350f",
                      }}
                    >
                      Scholarship Test 2026
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#92400e",
                        marginTop: 4,
                        lineHeight: 1.6,
                      }}
                    >
                      Classes VI–IX | 20 April 2026
                      <br />
                      Register at the school office today.
                    </div>
                    <Link
                      to="/admissions"
                      style={{
                        marginTop: 12,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#92400e",
                      }}
                    >
                      Register Now{" "}
                      <ArrowRight style={{ width: 13, height: 13 }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="faq-grid">
            <div>
              <span className="section-label">FAQ</span>
              <h2
                style={{
                  marginTop: 14,
                  fontSize: 30,
                  fontWeight: 900,
                  lineHeight: 1.2,
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 14.5,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                Find answers to the most common queries about admissions,
                programs, and campus life.
              </p>
              <Link
                to="/contact"
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--primary)",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Contact Admissions Office{" "}
                <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((f, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <ChevronDown
                      style={{
                        width: 16,
                        height: 16,
                        transition: "transform 0.2s",
                        transform:
                          openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    />
                  </button>
                  {openFaq === i && <div className="faq-a">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" style={{ padding: "64px 0" }}>
        <div className="cta-wrap">
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#d5f0d1",
                marginBottom: 10,
              }}
            >
              Admissions 2026 are open
            </div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.2,
                maxWidth: 500,
              }}
            >
              Give Your Child the Foundation They Deserve
            </h2>
          </div>
          <div className="cta-actions">
            <Link
              to="/admissions"
              style={{
                background: "#f59e0b",
                color: "#1a1a2e",
                padding: "13px 28px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Apply for Admission
            </Link>
            <Link
              to="/about"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "13px 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Download Prospectus
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: "var(--surface)", padding: "64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h2 className="contact-title">Campus Contact</h2>
          <div className="contact-grid">
            {[
              {
                icon: <MapPin style={{ width: 18, height: 18 }} />,
                label: "Address",
                value: "Village Nandok, District Office Road, India",
              },
              {
                icon: <Phone style={{ width: 18, height: 18 }} />,
                label: "Phone",
                value: "+91 98765 43210",
              },
              {
                icon: <FileText style={{ width: 18, height: 18 }} />,
                label: "Email",
                value: "office@littleangel.edu.in",
              },
            ].map((c, i) => (
              <div key={i} className="contact-card">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: 13, marginBottom: 5 }}
                  >
                    {c.label}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)" }}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
