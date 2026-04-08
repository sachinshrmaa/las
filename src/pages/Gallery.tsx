import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchContentStore, type GalleryItem } from "@/lib/contentStore";
import galleryCampus from "@/assets/gallery-campus.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryCultural from "@/assets/gallery-cultural.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryLibrary from "@/assets/gallery-library.jpg";
import gallerySports from "@/assets/gallery-sports.jpg";

const galleryItems = [
  {
    src: galleryCampus,
    title: "Campus Overview",
    desc: "Main grounds and building spaces designed for safety and discipline.",
  },
  {
    src: galleryClassroom,
    title: "Classroom Learning",
    desc: "Student-centric classrooms with focus on active participation.",
  },
  {
    src: galleryLab,
    title: "Science & Practical Labs",
    desc: "Practical exposure in physics, chemistry, and biology labs.",
  },
  {
    src: galleryLibrary,
    title: "Library Resources",
    desc: "A growing reading environment supporting language and research habits.",
  },
  {
    src: gallerySports,
    title: "Sports Activities",
    desc: "Team games and fitness activities for all-round development.",
  },
  {
    src: galleryCultural,
    title: "Cultural Events",
    desc: "Celebrations and stage activities that build confidence and creativity.",
  },
];

const Gallery = () => {
  const [adminGalleryItems, setAdminGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetchContentStore().then((data) => {
      setAdminGalleryItems(data.gallery);
    });
  }, []);

  const allGalleryItems = [
    ...adminGalleryItems.map((item) => ({
      src: item.src,
      title: item.title,
      desc: item.desc,
    })),
    ...galleryItems,
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(15,23,42,0.88) 0%, rgba(63,122,58,0.82) 52%, rgba(77,148,70,0.84) 100%), url('/la.jpeg') center/cover no-repeat",
        }}
      >
        <div className="container py-14 md:py-20 text-white">
          <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/20 px-4 py-1 text-xs font-semibold tracking-wider text-amber-200">
            CAMPUS GLIMPSES
          </span>
          <h1 className="mt-5 text-3xl font-bold md:text-5xl">Photo Gallery</h1>
          <p className="mt-3 max-w-2xl text-base text-green-100 md:text-lg">
            A visual walkthrough of academics, infrastructure, and student life
            at Little Angel Senior Secondary School.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allGalleryItems.map((item) => (
            <article
              key={`${item.title}-${item.src}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container rounded-2xl border border-green-200 bg-gradient-to-r from-green-700 to-green-900 p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wider text-green-100">
                VISIT THE CAMPUS
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                Schedule a Guided Tour
              </h3>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900"
              >
                Book Visit
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

export default Gallery;
