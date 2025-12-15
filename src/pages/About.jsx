import './About.css';

function About() {

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Evidence for Justice Lab</h1>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            The <a href="https://mccourt.georgetown.edu/evidence-for-justice-lab/" target="_blank" rel="noopener noreferrer">Evidence for Justice Lab</a> is a research and policy hub established within the McCourt School of Public Policy at Georgetown University. The Evidence for Justice Lab’s mission is to create a more effective and fair approach to safety and justice through evidence and research. We accomplish this by engaging communities, collaborating with government partners and conducting applied research to pave the way for a more just future.
We lead with curiosity and creativity. We approach our research through Evidence, Fairness, Voices, and Collaboration. By relying on our four pillars, we seek to redefine what constitutes evidence in the justice sector, incorporating both empirical data and lived experience.

          </p>
        </div>

        <div className="about-section">
          <h2>Get Involved</h2>
          <p>
            If you are a research partner, government organization, or a student interested in getting involved with the Lab, we would love to hear from you!
          </p>
          <p>
            <strong>Email:</strong> EvidenceForJusticeLab@georgetown.edu
          </p>
          <p>
            <strong>Connect with us:</strong> <a href="https://www.linkedin.com/company/evidence-for-justice-lab/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;