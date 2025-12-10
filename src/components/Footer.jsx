import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-line"></div>
          <p className="footer-description">
            The <a href="https://mccourt.georgetown.edu/evidence-for-justice-lab/" target="_blank" rel="noopener noreferrer">Evidence for Justice Lab</a> is a research and policy hub at Georgetown University's McCourt School of Public Policy. The Lab's mission is to create a more effective and fair approach to safety and justice through evidence and research. We accomplish this by engaging communities, collaborating with government partners and conducting applied research to pave the way for a more just future.
          </p>
        </div>
        
        <div className="footer-section footer-contact-section">
          <div className="footer-line"></div>
          <div className="footer-contact-wrapper">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-details">
              <a href="mailto:evidenceforjustice@georgetown.edu" className="footer-link">Email</a>
              <a href="https://www.linkedin.com/company/evidence-for-justice-lab/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 Powered and Secured by Evidence for Justice Lab</p>
      </div>
    </footer>
  );
}

export default Footer;

