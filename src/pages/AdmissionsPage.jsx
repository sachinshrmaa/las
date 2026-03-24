export default function AdmissionsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Admissions 2026-27</h1>
        <p className="section-intro">
          Admission is open for Class XI in Science, Commerce, and Arts streams.
          Limited seats are available for direct Class XII transfer admissions
          as per board norms.
        </p>

        <div className="card-grid">
          <article className="card">
            <h3>Eligibility</h3>
            <ul className="list">
              <li>
                Class XI: Passed Class X from SSC, CBSE, ICSE, or equivalent
                recognized board.
              </li>
              <li>
                Class XII: Class XI pass with valid migration and board
                compliance.
              </li>
              <li>
                Minimum marks criteria may apply based on stream seat
                availability.
              </li>
              <li>
                Reservation and quota rules are followed as per state
                regulations.
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Admission Process</h3>
            <ul className="list">
              <li>Submit enquiry form online or at the admission desk.</li>
              <li>
                Collect and submit completed admission application packet.
              </li>
              <li>Attend document verification and counseling.</li>
              <li>
                Confirm seat through fee payment within declared timeline.
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Documents Required</h3>
            <ul className="list">
              <li>Class X marksheet (original and photocopies).</li>
              <li>School leaving certificate or transfer certificate.</li>
              <li>Aadhaar card copies of student and parent or guardian.</li>
              <li>Two recent passport-size photographs.</li>
              <li>Caste or income certificate where applicable.</li>
            </ul>
          </article>
        </div>

        <div className="two-col">
          <article className="card">
            <h2 className="section-title">Important Dates</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Application Forms Available</td>
                    <td>1 April 2026</td>
                  </tr>
                  <tr>
                    <td>Document Verification Start</td>
                    <td>8 April 2026</td>
                  </tr>
                  <tr>
                    <td>First Merit List</td>
                    <td>22 April 2026</td>
                  </tr>
                  <tr>
                    <td>Fee Payment Window (Round 1)</td>
                    <td>23-29 April 2026</td>
                  </tr>
                  <tr>
                    <td>Session Commencement</td>
                    <td>10 June 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card">
            <h2 className="section-title">Fee Structure (Annual)</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Stream</th>
                    <th>Tuition and Development Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Science</td>
                    <td>INR 68,000</td>
                  </tr>
                  <tr>
                    <td>Commerce</td>
                    <td>INR 52,000</td>
                  </tr>
                  <tr>
                    <td>Arts</td>
                    <td>INR 46,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="fee-note">
              Laboratory charges, transport, and examination fees are billed
              separately where applicable. Merit scholarships and need-based
              concessions are available.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
