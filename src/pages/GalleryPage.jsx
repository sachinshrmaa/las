import GalleryLightbox from "../components/GalleryLightbox";

export default function GalleryPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <p className="section-intro">
          A snapshot of campus life, practical learning, co-curricular
          activities, and student achievements.
        </p>
        <GalleryLightbox />
      </div>
    </section>
  );
}
