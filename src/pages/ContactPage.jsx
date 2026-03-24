export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-intro">
          Reach out for admission support, academic information, transfer
          certificates, and appointments with the school office.
        </p>

        <div className="contact-wrap">
          <div>
            <div className="info-block">
              <h3>School Address</h3>
              <p>Little Angle Senior Secondary School</p>
              <p>Village Nandok, Rural Education Belt, India</p>
              <p>Landmark: Near Village Community Health Centre</p>
            </div>
            <div className="info-block" style={{ marginTop: "1rem" }}>
              <h3>Contact Details</h3>
              <p>Phone: +91 20 2556 8042</p>
              <p>Mobile: +91 98220 44113</p>
              <p>Email: info@littleanglesss.edu.in</p>
              <p>Office Hours: Monday to Saturday, 8:00 AM to 4:00 PM</p>
            </div>
          </div>

          <form className="contact-form" action="#" method="post">
            <h3>Enquiry Form</h3>
            <div className="form-row">
              <label htmlFor="full-name">Full Name</label>
              <input id="full-name" name="fullName" type="text" required />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="form-row">
              <label htmlFor="purpose">Purpose</label>
              <select id="purpose" name="purpose" required>
                <option value="">Select Purpose</option>
                <option value="admission">Admission Query</option>
                <option value="academic">Academic Information</option>
                <option value="documents">Certificates or Documents</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit Enquiry
            </button>
          </form>
        </div>

        <div className="map-wrap">
          <iframe
            title="School location map"
            src="https://maps.google.com/maps?q=Nandok%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
