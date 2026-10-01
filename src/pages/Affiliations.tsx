import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, ExternalLink, Download, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AffiliationDoc {
  title: string;
  description: string;
  category: string;
  pdfUrl: string;
}

const affiliationDocs: AffiliationDoc[] = [
  {
    title: "CBSE Affiliation Letter",
    description:
      "Official affiliation letter issued by the Central Board of Secondary Education for Little Angel Senior Secondary School.",
    category: "CBSE",
    pdfUrl: "/pdfs/affiliation-letter.pdf",
  },
  {
    title: "Sanitation Certificate",
    description:
      "Health and sanitation compliance certificate issued by the Block Development Office.",
    category: "Compliance",
    pdfUrl: "/pdfs/SANITATION-CERTIFICATE.pdf",
  },
];

const categories = ["All", ...Array.from(new Set(affiliationDocs.map((d) => d.category)))];

const categoryColors: Record<string, string> = {
  CBSE: "bg-blue-50 text-blue-700 border-blue-200",
  Compliance: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const Affiliations = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = affiliationDocs.filter((doc) => {
    const matchesCategory =
      activeCategory === "All" || doc.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(15,23,42,0.88) 0%, rgba(63,122,58,0.82) 52%, rgba(77,148,70,0.84) 100%), url('/la.jpeg') center/cover no-repeat",
        }}
      >
        <div className="container py-14 md:py-20 text-white">
          <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/20 px-4 py-1 text-xs font-semibold tracking-wider text-amber-200">
            MANDATORY DISCLOSURES
          </span>
          <h1 className="mt-5 text-3xl font-bold md:text-5xl">
            Affiliations &amp; Documents
          </h1>
          <p className="mt-3 max-w-2xl text-base text-green-100 md:text-lg">
            View and download all affiliation certificates, government
            recognitions, and mandatory compliance documents of Little Angel
            Senior Secondary School.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="container py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-[#4d9446] bg-[#4d9446] text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents…"
              className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-colors focus:border-[#4d9446]/40 focus:ring-2 focus:ring-[#4d9446]/10"
            />
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doc) => (
            <article
              key={doc.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/[0.06]"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#3f7a3a] to-[#4d9446]" />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-[#4d9446] shadow-sm">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                      categoryColors[doc.category] ??
                      "bg-slate-50 text-slate-600 border-slate-200"
                    }`}
                  >
                    {doc.category}
                  </span>
                </div>

                <h2 className="text-base font-bold leading-snug text-slate-900">
                  {doc.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {doc.description}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={doc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3f7a3a] to-[#4d9446] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-[#356830] hover:to-[#3f7a3a]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View PDF
                  </a>
                  <a
                    href={doc.pdfUrl}
                    download
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-[#4d9446]"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No documents match your search.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-12">
        <div className="container rounded-2xl border border-green-200 bg-gradient-to-r from-green-700 to-green-900 p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wider text-green-100">
                NEED MORE INFORMATION?
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                Contact Us for Any Queries
              </h3>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900"
              >
                Get in Touch
              </Link>
              <Link
                to="/admissions"
                className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
              >
                View Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliations;
