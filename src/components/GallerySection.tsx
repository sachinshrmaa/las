import { useState } from "react";
import { X } from "lucide-react";
import campusImg from "@/assets/gallery-campus.jpg";
import classroomImg from "@/assets/gallery-classroom.jpg";
import sportsImg from "@/assets/gallery-sports.jpg";
import labImg from "@/assets/gallery-lab.jpg";
import libraryImg from "@/assets/gallery-library.jpg";
import culturalImg from "@/assets/gallery-cultural.jpg";

const photos = [
  { src: campusImg, alt: "School campus aerial view", label: "Campus" },
  { src: classroomImg, alt: "Modern classroom", label: "Classrooms" },
  { src: sportsImg, alt: "Students in sports activities", label: "Sports" },
  { src: labImg, alt: "Science laboratory", label: "Science Lab" },
  { src: libraryImg, alt: "School library", label: "Library" },
  { src: culturalImg, alt: "Cultural program", label: "Cultural Activities" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Our Campus</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Photo Gallery</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A glimpse into life at Little Angel Senior Secondary School
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-xl shadow-card aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-semibold text-sm px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:opacity-80"
          >
            <X size={32} />
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
