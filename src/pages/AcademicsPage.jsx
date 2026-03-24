export default function AcademicsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Academics</h1>
        <p className="section-intro">
          Our higher secondary program combines conceptual clarity,
          board-focused assessments, and personal mentoring for every student.
        </p>

        <div className="card-grid">
          <article className="card">
            <h3>Science Stream</h3>
            <p>
              Physics, Chemistry, Mathematics or Biology, English, and optional
              Information Technology.
            </p>
            <ul className="list">
              <li>
                NEET and JEE foundation support through guided practice
                sessions.
              </li>
              <li>Weekly practical batches aligned with board curriculum.</li>
              <li>
                Bridge support for students moving from SSC, CBSE, or ICSE.
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Commerce Stream</h3>
            <p>
              Accountancy, Economics, Organization of Commerce, Mathematics or
              IT, and languages.
            </p>
            <ul className="list">
              <li>
                Accounts lab practice for problem-solving speed and accuracy.
              </li>
              <li>Workshops in entrepreneurship and financial literacy.</li>
              <li>Guidance for CA Foundation and commerce degree pathways.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Arts Stream</h3>
            <p>
              Political Science, History, Sociology, Psychology, language
              electives, and project studies.
            </p>
            <ul className="list">
              <li>
                Presentation-based internal assessments and research writing.
              </li>
              <li>Focused support for CUET and liberal arts admissions.</li>
              <li>Public speaking and communication skill development.</li>
            </ul>
          </article>
        </div>

        <div className="two-col">
          <article className="card">
            <h2 className="section-title">Classrooms</h2>
            <p>
              Bright, ventilated classrooms with digital boards and structured
              seating to improve visibility, interaction, and classroom
              discipline.
            </p>
            <ul className="list">
              <li>Average class size of 40 for manageable teacher support.</li>
              <li>
                Balanced timetable between practical, theory, and revision
                periods.
              </li>
              <li>Attendance and progress tracking through school ERP.</li>
            </ul>
          </article>
          <article className="card">
            <h2 className="section-title">Labs and Facilities</h2>
            <p>
              Separate Physics, Chemistry, Biology, and Computer labs with safe
              protocols, trained assistants, and regular equipment audits.
            </p>
            <ul className="list">
              <li>Library with 8,000+ titles and board reference materials.</li>
              <li>Career guidance cell with one-on-one counseling support.</li>
              <li>Remedial and enrichment sessions scheduled each week.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
