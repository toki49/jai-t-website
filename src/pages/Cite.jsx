import './Cite.css';

function Cite() {
  return (
    <div className="cite-container">
      <div className="cite-header">
        <h1 className="cite-title">How to Cite the JAI-T Database</h1>
        <p className="cite-subtitle">
          If you use data from the Justice and AI Tracker in your research, publications, or reports, please cite it as follows:
        </p>
        <div className="citation-header-box">
          <p className="citation-text">
            <strong>Evidence for Justice Lab. (2025). <em>The Justice and AI Tracker (JAI-T)</em>. McCourt School of Public Policy, Georgetown University. Retrieved from https://jai-t.com/</strong>
          </p>
        </div>
      </div>
      <div className="cite-content"></div>
    </div>
  );
}

export default Cite;
