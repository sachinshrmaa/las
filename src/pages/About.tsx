import { Link } from "react-router-dom";
import { Award, BookOpen, Building2, GraduationCap, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Academic Discipline",
    text: "Structured classroom practices and regular progress tracking to build strong fundamentals.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Character & Conduct",
    text: "A value-based environment focused on responsibility, empathy, and leadership among students.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Campus Ecosystem",
    text: "Safe and student-centered infrastructure with labs, library access, and activity spaces.",
  },
];

const About = () => (
  <div className="min-h-screen bg-white">
    <Navbar />

    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, rgba(15,23,42,0.88) 0%, rgba(63,122,58,0.82) 52%, rgba(77,148,70,0.84) 100%), url('/la.jpeg') center/cover no-repeat",
      }}
    >
      <div className="container py-16 md:py-24 text-white">
        <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/20 px-4 py-1 text-xs font-semibold tracking-wider text-amber-200">
          ABOUT THE INSTITUTION
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Building Strong Foundations for Lifelong Learning
        </h1>
        <p className="mt-4 max-w-3xl text-base text-green-100 md:text-lg">
          Little Angel Senior Secondary School has served families for over two
          decades with a clear goal: deliver quality, accessible, and
          disciplined education from Nursery to Class XII.
        </p>
      </div>
    </section>

    <section className="container py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-3 inline-flex rounded-lg bg-green-50 p-2 text-green-700">
              {pillar.icon}
            </div>
            <h2 className="text-lg font-bold text-slate-900">{pillar.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {pillar.text}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            To nurture responsible, confident, and socially aware learners who
            are academically strong and ethically grounded.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>
              1. Learning that balances academics and personality development.
            </li>
            <li>2. Continuous mentoring to improve outcomes at every stage.</li>
            <li>3. Equal opportunity for students from diverse backgrounds.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Deliver value-oriented education through qualified faculty,
            structured pedagogy, and a secure learning environment where every
            student can grow.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Excellence
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Integrity
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Inclusion
            </span>
          </div>
        </article>
      </div>
    </section>

    <section className="container py-12 md:py-16">
      <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-700 to-green-900 p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-green-100">
              NEXT STEP
            </p>
            <h3 className="mt-1 text-2xl font-bold">
              Explore Admissions and Campus Visits
            </h3>
          </div>
          <div className="flex gap-3">
            <Link
              to="/admissions"
              className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
