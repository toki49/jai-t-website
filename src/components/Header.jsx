import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const location = useLocation();
  const [jaitDropdownOpen, setJaitDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const isJaiTActive = location.pathname === '/jai-t' || location.pathname === '/jai-t/taxonomy';
  const isContactActive = location.pathname.startsWith('/contact');

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-left-link">
          <div className="header-left">
            <h1 className="site-title">Evidence for Justice Lab</h1>
          </div>
        </Link>
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Map
          </Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setJaitDropdownOpen(true)}
            onMouseLeave={() => setJaitDropdownOpen(false)}
          >
            <Link 
              to="/jai-t" 
              className={`nav-link ${isJaiTActive ? 'active' : ''}`}
            >
              Database
            </Link>
            {jaitDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setJaitDropdownOpen(true)}
                onMouseLeave={() => setJaitDropdownOpen(false)}
              >
                <Link 
                  to="/jai-t#table" 
                  className={`dropdown-item ${location.pathname === '/jai-t' && (!location.hash || location.hash === '#table') ? 'active' : ''}`}
                >
                  Database
                </Link>
                <Link 
                  to="/jai-t#taxonomy" 
                  className={`dropdown-item ${location.hash === '#taxonomy' ? 'active' : ''}`}
                >
                  Taxonomy
                </Link>
                
                <Link 
                  to="/jai-t#methodology" 
                  className={`dropdown-item ${location.hash === '#methodology' ? 'active' : ''}`}
                >
                  Methodology
                </Link>
                <Link 
                  to="/jai-t#citation" 
                  className={`dropdown-item ${location.hash === '#citation' ? 'active' : ''}`}
                >
                  Citation
                </Link>
              </div>
            )}
          </div>

          {/* Top-level Insights nav link */}
          <Link 
            to="/insights" 
            className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
          >
            Insights
          </Link>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setContactDropdownOpen(true)}
            onMouseLeave={() => setContactDropdownOpen(false)}
          >
            <Link 
              to="/contact/about" 
              className={`nav-link ${isContactActive ? 'active' : ''}`}
            >
              Contact
            </Link>
            {contactDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setContactDropdownOpen(true)}
                onMouseLeave={() => setContactDropdownOpen(false)}
              >
                <Link 
                  to="/contact/about" 
                  className={`dropdown-item ${location.pathname === '/contact/about' ? 'active' : ''}`}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact/faq" 
                  className={`dropdown-item ${location.pathname === '/contact/faq' ? 'active' : ''}`}
                >
                  FAQs
                </Link>
                <Link 
                  to="/contact" 
                  className={`dropdown-item ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                  Submit an Entry
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;