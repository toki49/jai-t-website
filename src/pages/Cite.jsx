import './Cite.css';

function Cite() {
  return (
    <div className="cite-container">
      <div className="cite-content">
        <h1 className="cite-title">How to Cite</h1>
        
        <div className="cite-section">
          <h2>Citing the JAI-T Database</h2>
          <p>
            If you use data from the Justice and AI Tracker (JAI-T) in your research, publications, or reports, please cite it as follows:
          </p>
          
          <div className="citation-box">
            <p className="citation-text">
              Evidence for Justice Lab. (2025). <em>Justice and AI Tracker (JAI-T)</em>. Georgetown University McCourt School of Public Policy. Retrieved from [URL]
            </p>
          </div>
          
          <h3>BibTeX Format</h3>
          <div className="citation-box code-box">
            <pre>
{`@misc{jait2025,
  author = {{Evidence for Justice Lab}},
  title = {Justice and AI Tracker (JAI-T)},
  year = {2025},
  institution = {Georgetown University McCourt School of Public Policy},
  url = {[URL]},
  note = {Accessed: [Date]}
}`}
            </pre>
          </div>
        </div>

        <div className="cite-section">
          <h2>Attribution Guidelines</h2>
          <p>
            When referencing specific data points or analysis from the JAI-T:
          </p>
          <ul>
            <li>Clearly identify the data source as the "Justice and AI Tracker (JAI-T)"</li>
            <li>Include the date you accessed the database</li>
            <li>Link to the database when publishing online</li>
            <li>Credit the Evidence for Justice Lab at Georgetown University</li>
          </ul>
        </div>

        <div className="cite-section">
          <h2>Contact</h2>
          <p>
            For questions about citing the JAI-T or using our data, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> EvidenceForJusticeLab@georgetown.edu
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cite;
