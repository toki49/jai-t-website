import "./Methodology.css";

export default function Methodology() {
  return (
    <div className="methodology-container">
      {/* HEADER */}
      <header className="methodology-header">
        <h1 className="methodology-title">Our Data Collection Approach</h1>
        <p className="methodology-subtitle">The Justice and Artificial Intelligence Tracker is a collection of information cited from various news articles, reports, and studies. Research was conducted by identifying key search terms that were determined to likely generate the most sources about artificial intelligence tools within the criminal justice system. Once these key terms were inputted into a search engine, data was collected by identifying sources that confirmed the past, present, or future use of AI-driven tools. Research assistants specifically looked for links that mentioned the use of artificial intelligence tools within a designated location.</p>

        {/* <h1 className="methodology-title">Our Data Collection Approach</h1> */}
        <p className="methodology-subtitle">
          The Justice and Artificial Intelligence Tracker is a collection of
          information cited from various news articles, reports, and studies.
        </p>
      </header>

      {/* MAIN SECTIONS */}
      <main className="methodology-sections">
        {/* SECTION: DATA COLLECTION PROCESS */}
        <section className="methodology-section">
          {/* <h2 className="section-title">Data Collection Process</h2> */}
          {/* <div className="section-divider" /> */}

          <div className="methodology-steps">
            {/* STEP 1 */}
            <div className="methodology-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">
                  Define Search Query & Identify Relevant Sources
                </h3>
                <p className="step-description">
                  Research begins by generating targeted Google search queries
                  tailored to each assigned city.
                </p>

                <div className="quote-box">
                  <p className="quote-example">
                    <em>Example Google search query:</em>
                  </p>
                  <p className="quote-query">
                    "New York City, New York Artificial Intelligence
                    Corrections"
                  </p>
                </div>

                <p className="step-description">
                  This structured approach ensures that Google returns a wide
                  range of publicly available sources.
                </p>
              </div>
            </div>

            <div className="step-arrow">↓</div>

            {/* STEP 2 */}
            <div className="methodology-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">
                  Detect Potential AI Applications in Search Results
                </h3>
                <p className="step-description">
                  After running Google queries, researchers scan the source for
                  references to AI use.
                </p>

                <div className="phrase-box">
                  <p className="phrase-intro">
                    Researchers look for phrasing such as:
                  </p>
                  <ul className="phrase-list">
                    <li><em>"Police adopt AI-powered..."</em></li>
                    <li><em>"City pilots machine learning tool..."</em></li>
                    <li><em>"Court system introduces AI-based..."</em></li>
                  </ul>
                </div>

                <p className="step-description">
                  <strong>DISCLAIMER:</strong> Sources discussing AI policy were
                  excluded; only operational use cases were recorded.
                </p>

                <p className="step-description">
                  "Future use" refers to confirmed pilot programs.
                </p>
              </div>
            </div>

            <div className="step-arrow">↓</div>

            {/* STEP 3 */}
            <div className="methodology-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Verify AI Use Through Close Review</h3>
                <ul className="verification-list">
                  <li>Technology must be artificial intelligence.</li>
                  <li>Use must occur within the specific city.</li>
                  <li>Article must confirm past, present, or planned use.</li>
                </ul>
              </div>
            </div>

            <div className="step-arrow">↓</div>

            {/* STEP 4 */}
            <div className="methodology-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">
                  Enter Verified Findings into the Phase I Tracker
                </h3>

                <p className="step-description">
                  After confirming validity, researchers enter detailed
                  information into the tracker.
                </p>

                <ul className="verification-list">
                  <li>AI Type</li>
                  <li>City and State</li>
                  <li>Vendor or Technology Name</li>
                  <li>Domain (LE, Courts, Corrections)</li>
                  <li>Source link + Google search link</li>
                  <li>Supplemental links</li>
                  <li>APA citation</li>
                </ul>
              </div>
            </div>

            <div className="step-arrow">↓</div>

            {/* STEP 5 */}
            <div className="methodology-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">
                  Category Classification & Finalize Entries
                </h3>
                <p className="step-description">
                  A second research team conducts a full quality review.
                </p>

                <p className="step-description">
                  Category taxonomy applied:
                  <a
                    href="/jai-t/taxonomy"
                    style={{
                      color: "#8b7360",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                  >
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
