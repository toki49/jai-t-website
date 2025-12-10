import './Taxonomy.css';

function Taxonomy() {
  return (
    <div className="taxonomy-container">
      <div className="taxonomy-content">
        <h1 className="taxonomy-title">Taxonomy</h1>
        <p className="taxonomy-intro">
          This page explains how data was collected and organized for the JAI-T database.
        </p>
        
        <div className="taxonomy-section">
          <h2>Categorizations</h2>
          <p>
            Content explaining the taxonomy and data collection process will be added here.
          </p>
        </div>

        <div className="taxonomy-section">
          <h2>Taxonomies</h2>
          <p>
            Detailed definitions of each category used in the database will be provided here.
          </p>
        </div>

        <div className="taxonomy-section">
          <h2>List of Common AI Tools used in the Justice System</h2>
          <p>
            Information about how domains (Courts, Law Enforcement, Corrections) are classified.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Taxonomy;

