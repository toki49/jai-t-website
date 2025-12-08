import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Evidence for Justice Lab</h1>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Content about the Evidence for Justice Lab's mission and goals will be added here.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Work</h2>
          <p>
            Information about the lab's research, projects, and initiatives will be provided here.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> EvidenceForJusticeLab@gmail.com
          </p>
          <p>
            <strong>Address:</strong> 125 E St. NW Washington, DC 20001
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

