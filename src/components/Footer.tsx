import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="school-footer" style={{ padding: "56px 0 0" }}>
    <style>{`
      .school-footer {
        background: #0f172a;
        color: #94a3b8;
      }
      .school-footer-heading {
        color: #f8fafc;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .school-footer-link {
        display: block;
        font-size: 13px;
        padding: 4px 0;
        transition: color 0.15s;
      }
      .school-footer-link:hover {
        color: #f8fafc;
      }
      .school-footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 40px;
        padding-bottom: 48px;
      }
      @media (max-width: 1024px) {
        .school-footer-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 640px) {
        .school-footer-grid {
          grid-template-columns: 1fr;
          gap: 28px;
        }
      }
      .school-footer-bottom {
        border-top: 1px solid #1e293b;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        font-size: 12px;
        color: #475569;
      }
      @media (max-width: 640px) {
        .school-footer-bottom {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}</style>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div className="school-footer-grid">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Little Angel School logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#f8fafc" }}>
                Little Angel
              </div>
              <div
                style={{
                  fontSize: 10.5,
                  color: "#64748b",
                  fontWeight: 500,
                }}
              >
                Senior Secondary School
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.75, maxWidth: 280 }}>
            Committed to academic excellence and all-round growth for over 25
            years. Shaping the leaders of tomorrow, one student at a time.
          </p>
        </div>
        {[
          {
            heading: "About",
            links: ["About Us", "Leadership", "Awards", "Affiliation", "Admin"],
          },
          {
            heading: "Academics",
            links: [
              "Primary School",
              "Middle School",
              "Secondary",
              "Senior Secondary",
            ],
          },
          {
            heading: "Admissions",
            links: ["Apply Now", "Fee Structure", "Scholarship", "Contact Us"],
          },
        ].map((col) => (
          <div key={col.heading}>
            <div className="school-footer-heading">{col.heading}</div>
            {col.links.map((l) => (
              <Link
                key={l}
                to={
                  l === "Admin"
                    ? "/admin"
                    : col.heading === "About"
                    ? "/about"
                    : col.heading === "Admissions"
                      ? "/admissions"
                      : "/gallery"
                }
                className="school-footer-link"
              >
                {l}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="school-footer-bottom">
        <span>
          © 2026 Little Angel Senior Secondary School. All rights reserved.
        </span>
        <span>Designed and Developed by Stipill Solutions and Services</span>
      </div>
    </div>
  </footer>
);

export default Footer;
