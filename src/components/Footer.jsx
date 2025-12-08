import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">Georgetown University</p>
          <p className="footer-text">Evidence for Justice Lab</p>
          <p className="footer-text">125 E St. NW Washington, DC 20001</p>
          <p className="footer-text">evidenceforjustice@georgetown.edu</p>
        </div>
        <div className="footer-separator"></div>
        <div className="footer-right">
          {/* <p className="footer-text">jal.toom</p> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 Powered and Secured by Evidence for Justice Lab</p>
      </div>
    </footer>
  );
}

export default Footer;

