import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Higher Secondary · Classes XI-XII</p>
            <h1 className="la-hero-h1">
              Where students earn <em>board excellence</em> and shape tomorrow
            </h1>
            <p>
              Founded in 1997 in the village of Nandok, Little Angle Senior
              Secondary School brings quality English-medium education to
              first-generation learners and farming families.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/admissions">
                Apply for 2026-27
              </Link>
              <Link className="btn btn-secondary" to="/academics">
                Explore Streams
              </Link>
            </div>
            <div className="quick-links">
              <Link to="/admissions">Admission Guidelines</Link>
              <Link to="/contact">Transport and Routes</Link>
              <Link to="/academics">Labs and Facilities</Link>
              <Link to="/about">Faculty Team</Link>
            </div>
          </div>

          <div className="relative hero-slider-wrap">
            <HeroSlider />
            <div className="hero-badge hero-badge-emerald pointer-events-none absolute left-4 top-4 rounded-xl border px-3 py-2 text-xs uppercase tracking-[0.12em] backdrop-blur">
              Est. 1997 · Nandok
            </div>
            <div className="hero-badge hero-badge-gold pointer-events-none absolute bottom-4 right-4 rounded-xl border px-3 py-2 text-xs uppercase tracking-[0.12em] backdrop-blur">
              96% Board Pass Rate
            </div>
          </div>
        </div>

        <div className="container">
          <div className="metrics-row" aria-label="School highlights">
            <article className="metric-card">
              <p className="metric-value">28+</p>
              <p className="metric-label">Years of Academic Service</p>
            </article>
            <article className="metric-card">
              <p className="metric-value metric-gold">96%</p>
              <p className="metric-label">Class XII Board Pass Rate 2025</p>
            </article>
            <article className="metric-card">
              <p className="metric-value metric-rose">1,200+</p>
              <p className="metric-label">Students to Higher Studies</p>
            </article>
            <article className="metric-card">
              <p className="metric-value metric-violet">40:1</p>
              <p className="metric-label">Student-Teacher Batch Ratio</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="la-section-label">Latest from School</div>
          <div className="la-two-col">
            <article className="la-home-panel">
              <h2 className="section-title">News and Announcements</h2>
              <ul className="la-news-list">
                <li className="la-news-item">
                  <span className="la-news-pill">24 Mar</span>
                  <span className="la-news-text">
                    FYJC orientation for incoming Class XI students at 10:00 AM.
                  </span>
                </li>
                <li className="la-news-item">
                  <span className="la-news-pill">18 Mar</span>
                  <span className="la-news-text">
                    Class XII practical exam schedule released on notice board.
                  </span>
                </li>
                <li className="la-news-item">
                  <span className="la-news-pill">12 Mar</span>
                  <span className="la-news-text">
                    Inter-school commerce quiz team secured district second
                    place.
                  </span>
                </li>
                <li className="la-news-item">
                  <span className="la-news-pill">8 Mar</span>
                  <span className="la-news-text">
                    Parent-teacher meeting for Class XI from 9:30 AM to 1:00 PM.
                  </span>
                </li>
                <li className="la-news-item">
                  <span className="la-news-pill">1 Mar</span>
                  <span className="la-news-text">
                    Scholarship support desk open for EWS and merit applicants.
                  </span>
                </li>
              </ul>
            </article>

            <article className="la-testi-card">
              <h2 className="section-title">What Families Say</h2>
              <div className="la-testi-item">
                <span className="la-testi-q">"</span>
                <p className="la-testi-text">
                  The faculty gave my daughter focused board preparation and
                  regular feedback. She improved from average scores to
                  distinction within one year.
                </p>
                <span className="la-testi-by">
                  <span className="la-testi-gem" /> Parent · Class XII Science
                </span>
              </div>
              <div className="la-testi-item">
                <span className="la-testi-q">"</span>
                <p className="la-testi-text">
                  I received clear guidance for CUET preparation and improved
                  confidence in public speaking through regular class
                  activities.
                </p>
                <span className="la-testi-by">
                  <span className="la-testi-gem" /> Student · Class XII Arts
                </span>
              </div>
              <div className="la-testi-item">
                <span className="la-testi-q">"</span>
                <p className="la-testi-text">
                  Structured accountancy practice and weekly tests helped me
                  prepare for both board exams and CA Foundation basics.
                </p>
                <span className="la-testi-by">
                  <span className="la-testi-gem" /> Student · Class XII Commerce
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
