import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <img
        src={heroBg}
        alt="Little Angel School campus aerial view"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container py-20">
        <div
          className="max-w-2xl"
          style={{ animation: "fade-in-up 0.8s ease-out" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 backdrop-blur-[1px] border border-secondary/30">
            Est. 1997 • Nandok Village
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Nurturing Young Minds in{" "}
            <span className="text-secondary">Rural India</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
            Quality English-medium education from Nursery to Senior Secondary,
            making learning accessible, affordable, and meaningful since 1997.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Apply for Admission
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
