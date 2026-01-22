import './Methodology.css';

function Methodology() {
  return (
    <div className="methodology-container">
      <div className="methodology-header">
        <h1 className="methodology-title">Our Data Collection Approach</h1>
        <p className="methodology-subtitle"> JAI-T follows a clear, systematic process to identify where AI tools are being used in the criminal justice system across the top 100 U.S. cities. Each step in our approach helps ensure that accurate and verifiable information enters the tracker.
</p>
      </div>

      <div className="methodology-steps">
        <div className="methodology-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Define Search Query & Identify Relevant Sources</h3>
            <p className="step-description">
              Research generate <strong>targeted Google search queries</strong> tailored to each assigned city and its criminal justice system domain. Using the structured search key, researchers input queries such as <em>"City, State Artificial Intelligence Law Enforcement"</em> and optional variants (e.g., <em>"law enforcement," "policing," "criminal justice"</em>).
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
              After running initial Google queries, researchers scan each identified source to locate articles that reference the use of AI tools in the assigned city’s justice system.
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
              <strong>DISCLAIMER:</strong> Sources that discuss legislation or policies that concern artificial intelligence were not included. This research focuses on the specific use of artificial intelligence tools within criminal justice systems.
            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              
            </p>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Examine AI Use Through Close Review</h3>
            <p className="step-description">
              The information in each selected article undergoes a detailed review and/or additional searches to confirm that:
            </p>
            <ul className="verification-list">
              <li>The technology referenced is <strong>artificial intelligence</strong>, not simply automation.</li>
              <li>The tool is used within the <strong>justice system of the specific city</strong> (not the county, neighboring areas, or the state).</li>
              <li>The article provides evidence of <strong>active deployment, past implementation, or a confirmed pilot program</strong>, typically indicated by dates, vendor partnerships, or explicit rollout plans.</li>
            </ul>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Enter Findings into the Phase I Tracker</h3>
            <p className="step-description">
              After confirming that an article documents AI use in a specific city, researchers enter additional information about the technology into their tracker. The goal at this stage is to capture a <strong>well-documented snapshot</strong> of how the AI tool is being used within its justice-system domain. 

            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              Researchers gather and input information such as:
            </p>
            <ul className="verification-list">
              <li><strong>Type of Artificial Intelligence</strong></li>
              <li><strong>City and state</strong> where the AI tool is being used</li>
              <li><strong>Vendor or Name of Technological Tool</strong> (if applicable)</li>
              <li><strong>Criminal Justice Domain</strong> in which the tool operates (Law Enforcement, Courts, Corrections)</li>
              <li><strong>Direct link</strong> to the article</li>
              <li><strong>Additional related links</strong> that mention the same tool in the same location</li>
              <li><strong>APA citation</strong> for proper documentation and future reference</li>
            </ul>
            <div style={{ marginBottom: '1rem' }}></div>
          </div>
        </div>

        <div className="step-arrow">↓</div>

        <div className="methodology-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title">Verification, Category Classification and Finalization</h3>
            <p className="step-description">
              A second team of researchers conducts a thorough quality review to ensure all details are accurate and complete. This includes verifying that the correct city is identified, confirming that the technology is truly artificial intelligence, checking that the domain assignment aligns with the justice-system context, validating citations, and reviewing all metadata for consistency.
            </p>
            <div style={{ marginBottom: '1rem' }}></div>
            <p className="step-description">
              As part of this final check, the second research team also applies an established <a href="/jai-t-website/taxonomy" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}>taxonomy</a> to ensure each AI tool is <em>categorized</em> by its function and operational purpose in the specific city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;