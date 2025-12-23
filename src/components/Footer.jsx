import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Footer.css';

function Footer() {
  const linkedInUrl = "https://www.linkedin.com/company/evidence-for-justice-lab/";
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Option 1: Using Formspree (replace YOUR_FORM_ID with your actual Formspree ID)
    try {
      const response = await fetch('https://formspree.io/f/xykgkzqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        // Also record in Google Sheet
        e.preventDefault();
        fetch('https://script.google.com/macros/s/AKfycbxvWB_Kr4-RiSLOOrHQOxsN44Kqd3l4Ft8Pa4BizTdUsn_ab8J4QaT6Tgb6zG23mXB7/exec', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            formType: 'newsletter',
            email: email
          }).toString()
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

        setSubscribeStatus('Thanks for subscribing!');
        setEmail('');
        setTimeout(() => setSubscribeStatus(''), 3000);
      } else {
        setSubscribeStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubscribeStatus('Something went wrong. Please try again.');
    }

    // Option 2: Direct email (simpler but shows in URL)
    // window.location.href = `mailto:evidenceforjustice@georgetown.edu?subject=Newsletter Subscription&body=Please subscribe ${email} to the newsletter`;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img 
            src={`${import.meta.env.BASE_URL}footerlogo.png`}
            alt="Evidence for Justice Lab Logo" 
            className="footer-logo"
          />
        </div>

        <div className="footer-middle">
          <div className="footer-contact">
            <a 
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg 
                className="footer-linkedin-icon"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <nav className="footer-nav">
            <Link to="/" className="footer-link">Map</Link>
            <Link to="/jai-t" className="footer-link">Database</Link>
            <Link to="/insights" className="footer-link">Insights</Link>
            <Link to="/contact/about" className="footer-link">Contact</Link>
          </nav>
        </div>

        <div className="footer-newsletter">
          <p className="newsletter-title">Track AI. Track Justice. Stay Informed.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
          {subscribeStatus && (
            <p className="newsletter-status">{subscribeStatus}</p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;