import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-left-link">
          <div className="header-left">
            <h1 className="site-title">Evidence for Justice Lab</h1>
            <h2 className="site-subtitle">Justice and AI Tracker</h2>
          </div>
        </Link>
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/jai-t" 
            className={`nav-link ${location.pathname === '/jai-t' ? 'active' : ''}`}
          >
            JAI-T
          </Link>
          <Link 
            to="/methodology" 
            className={`nav-link ${location.pathname === '/methodology' ? 'active' : ''}`}
          >
            Methodology
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

