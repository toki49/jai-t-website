import './Methodology.css';

function Methodology() {
  return (
    <div className="methodology-container">
      <div className="methodology-header">
        <h1 className="methodology-title">Our Data Collection Approach</h1>
        <p className="methodology-subtitle">The Justice and Artificial Intelligence Tracker follows a clear, evidence-based process to identify and confirm where AI tools are being used in the justice system. Each step helps ensure that only accurate, verifiable information enters the Justice AI Tracker.
</p>
      </div>

      <div className="methodology-steps">
        <div className="methodology-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Define Search Query & Identify Relevant Sources</h3>
            <p className="step-description">
              Research begins by generating <strong>targeted Google search queries</strong> tailored to each assigned city and its justice-system context. Using the structured search key, researchers input queries such as <em>"City, State Artificial Intelligence Law Enforcement"</em> and optional variants (e.g., <em>"law enforcement," "policing," "criminal justice"</em>).
            </p>
            <div className="quote-box">
              <p className="quote-example">
                <em>Example Google search query:</em>
              </p>
              <p className="quote-query">
                "New York City, New York Artificial Intelligence Corrections"
              </p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}></div>
            <p className="step-description">
              This structured approach ensures that Google returns a wide range of publicly available sources—news articles, investigative reports, press releases, and analyses—that may describe how AI tools are used across our three domains: Law Enforcement, Courts, and Corrections. 
            </p>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Detect Potential AI Applications in Search Results</h3>
            <p className="step-description">
              After running the initial Google queries, researchers scan the entire source to identify articles that may reference the use of AI tools within the justice system of the assigned city.
            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <div className="phrase-box">
              <p className="phrase-intro">Researchers look for phrasing that suggests operational use. For example:</p>
              <ul className="phrase-list">
                <li><em>"Police adopt AI-powered..."</em></li>
                <li><em>"City pilots machine learning tool..."</em></li>
                <li><em>"Court system introduces AI-based..."</em></li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              <strong>DISCLAIMER:</strong> Sources that discuss legislation or policies that concern artificial intelligence were not included. This research focuses on the specific adoption and/or deployment of artificial intelligence tools within justice systems.
            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              "Future Use" of AI-driven tools are otherwise known as <strong>pilot programs</strong>. In this project/research, a pilot program differs from the potential use of a tool in that a pilot program is the confirmed implementation or confirmed plan to implement an AI tool into the law enforcement agency.
            </p>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Verify AI Use Through Close Review</h3>
            <p className="step-description">
              Each selected article undergoes a detailed review to confirm that:
            </p>
            <ul className="verification-list">
              <li>The technology referenced is <strong>artificial intelligence</strong>, not simply automation.</li>
              <li>The tool is used within the <strong>justice system of the specific city</strong> (not the county, statewide, or neighboring areas).</li>
              <li>The article provides evidence of <strong>active deployment, past implementation, or a confirmed pilot program</strong>, typically indicated by dates, vendor partnerships, or explicit rollout plans.</li>
            </ul>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Enter Verified Findings into the Phase I Tracker</h3>
            <p className="step-description">
              After confirming that an article documents real AI use in a specific city, researchers enter the most robuse information possible about the technology into their tracker. The goal at this stage is to capture a <strong>robust, well-documented snapshot</strong> of how the AI tool is being used within its justice-system domain. Each entry is treated as a detailed record that can stand on its own and clearly communicate what tool is being used, by whom, and in what context.
            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              Researchers gather and input information such as:
            </p>
            <ul className="verification-list">
              <li><strong>Type of Artificial Intelligence</strong></li>
              <li><strong>City and state</strong> where the AI tool is being used</li>
              <li><strong>Vendor or Name of Tech </strong> (if applicable)</li>
              <li><strong>Domain</strong> in which the tool operates (Law Enforcement, Courts, Corrections)</li>
              <li><strong>Direct link to the article</strong> and the <strong>Google search page</strong> where it appeared</li>
              <li><strong>Additional related links</strong> that mention the same tool in the same location</li>
              <li><strong>APA citation</strong> for proper documentation and future reference</li>
            </ul>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              This step ensures every verified tool is entered with clarity, depth, and consistency, allowing the Phase I dataset to serve as a reliable foundation for later analysis.
            </p>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Category Classification & Finalize Entries</h3>
            <p className="step-description">
              A second team of researchers conducts a thorough quality review to ensure all details are accurate and complete. This includes verifying that the correct city is identified, confirming that the technology is truly artificial intelligence, checking that the domain assignment aligns with the justice-system context, validating citations, and reviewing all metadata for consistency.
            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              As part of this final check, the second research team also applies the established Category <a href="/jai-t/taxonomy" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}>taxonomy</a> to ensure each AI tool is classified correctly according to its function and operational purpose.
            </p>
          </div>
        </div>

        <div className="disclaimer-box">
          <div className="step-content">
            <h3 className="step-title">DISCLAIMERS</h3>
            <div className="disclaimer-list">
              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Geographic Scope</h4>
                <p className="disclaimer-item-body"> Currently, the Justice AI Tracker focuses on the Top 100 largest U.S. cities (ABC123 population data). County- or state-level AI initiatives are included only when the city itself is clearly using the technology. In cases where metropolitan regions share similar names, classification is limited to the city jurisdiction. </p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Eligible Policy Areas</h4>
                <p className="disclaimer-item-body">AI tools used in non-justice policy areas (e.g., housing, local government, transportation management) are excluded unless there is clear evidence that they directly support crime, safety, investigations, and/or enforcement.</p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Organizational vs. Individual Use</h4>
                <p className="disclaimer-item-body">We document AI use whether it is adopted organization-wide (e.g., the Dallas Police Department) or used by individual actors within an agency (e.g., AI applied in a Cincinnati lawyer’s deposition). Organizational use refers to tools formally deployed across a department or unit, while individual use reflects technologies utilized by specific personnel of the justice system rather than the agency as a whole.</p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Pilot vs. Proposed Use</h4>
                <p className="disclaimer-item-body">The Tracker offers a footprint of documented AI use and is not exhaustive nor representative of real-time deployment. Only confirmed pilot programs, either defined as verified implementations or scheduled plans to deploy an AI tool are included. Unconfirmed or speculative future uses are eliminated during step 5 of our methodology.</p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Access to Sources</h4>
                <p className="disclaimer-item-body">If a source link is no longer active, users should contact the publisher or access archived versions through the <a href="https://web.archive.org" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Wayback Machine</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;