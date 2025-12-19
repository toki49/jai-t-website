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
              As part of this final check, the second research team also applies the established Category <a href="/jai-t-website/taxonomy" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}>taxonomy</a> to ensure each AI tool is classified correctly according to its function and operational purpose.

            </p>
            <p></p>
            <p className="step-description">AI adoption in the criminal justice system is accelerating rapidly - updates to the tracker will be posted every 6 months.  </p>
          </div>
        </div>

        <div className="disclaimer-box">
          <div className="step-content">
            <h3 className="step-title">DISCLAIMERS</h3>
            <div className="disclaimer-list">
              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Geographic Scope</h4>
                <p className="disclaimer-item-body"> JAI-T focuses on the <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}>100 Largest U.S. Cities</a> list. Statewide or county-level initiatives are only included when there is clear evidence of use at the city level. For metropolitan areas with overlapping names, classifications apply strictly to the city jurisdiction, not the broader region.</p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Organizational vs. Individual Use</h4>
                <p className="disclaimer-item-body">The database tracks AI use within the criminal justice system regardless of whether the tool is operated by an agency as a whole or by individuals within that agency. </p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Scope of Criminal Justice Use</h4>
                <p className="disclaimer-item-body">Tools deployed primarily for non-criminal justice purposes (e.g., housing, transportation, or general traffic management) are excluded unless there is clear evidence they are used for crime, law enforcement, public safety, or legal enforcement purposes. In some cases, tools deployed by non-justice agencies are included when they replace or directly support traditional criminal justice functions.</p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Status of Use</h4>
                <p className="disclaimer-item-body">Entries may reflect proposed, piloted, or deployed tools. Inclusion does not guarantee current or ongoing use. JAI-T represents a documented footprint of AI adoption, not an exhaustive or real-time inventory.</p>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Defining Artificial Intelligence</h4>
                <p className="disclaimer-item-body">Most tools are included when sources explicitly reference “artificial intelligence,” or when inclusion is based on an informed assessment of the technology’s function and common usage. However, some widely discussed technologies are included, even when AI use within those technologies may vary depending on the city, such as:</p>
                <ul className="disclaimer-bullet-list">
                  <li>Facial recognition</li>
                  <li>Gunshot detection systems</li>
                  <li>Automated license plate readers (ALPRs)</li>
                  <li>Body-worn camera footage review</li>
                  <li>Predictive policing tools</li>
                  <li>Real-time crime or intelligence centers</li>
                </ul>
              </div>

              <div className="disclaimer-item">
                <h4 className="disclaimer-item-title">Sources and Citations</h4>
                <p className="disclaimer-item-body">JAI-T relies on publicly available sources. If a cited source is no longer accessible, users are encouraged to contact the original publisher or consult archived versions using web archiving tools like the <a href="https://web.archive.org" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Wayback Machine</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;