import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h4>Little Angle Senior Secondary School</h4>
          <p>Village Nandok, Rural Education Belt, India</p>
          <p>Mon-Sat: 8:00 AM - 4:00 PM</p>
        </div>
        <div>
          <h4>Quick Navigation</h4>
          <ul className="footer-links">
            <li>
              <Link href="/academics">Academics</Link>
            </li>
            <li>
              <Link href="/admissions">Admissions</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>+91 20 2556 8042</p>
          <p>+91 98220 44113</p>
          <p>info@littleanglesss.edu.in</p>
        </div>
      </div>
      <div className="container copyright">
        <p>
          Copyright 2026 Little Angle Senior Secondary School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
