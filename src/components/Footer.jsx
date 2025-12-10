import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img 
          src="/footerlogo.png" 
          alt="Evidence for Justice Lab Logo" 
          className="footer-logo"
        />
        </div>
        <div className="footer-separator"></div>
        <div className="footer-right">
          <p className="footer-text">Home</p>
          <p className="footer-text">Database</p>
          <p className="footer-text">Contact</p>
          <p className="footer-text">Evidence for Justice Lab</p>

        </div>
      </div>
      <div className="footer-bottom">
          <p className="footer-text">evidenceforjustice@georgetown.edu</p>
      </div>
    </footer>
  );
}

export default Footer;

