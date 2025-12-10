import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import About from './About';
import './Contact.css';

function Contact() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname === '/contact/about' ? 'about' : 'submit'
  );

  const navigate = useNavigate();

  // Update tab when route changes
  useEffect(() => {
    if (location.pathname === '/contact/about') {
      setActiveTab('about');
    } else {
      setActiveTab('submit');
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'about') {
      navigate('/contact/about');
    } else {
      navigate('/contact');
    }
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    domain: '',
    additionalInfo: '',
    articleLink: '',
    aiTaskForce: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will review it shortly.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      domain: '',
      additionalInfo: '',
      articleLink: '',
      aiTaskForce: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-tabs">
        <button
          className={`contact-tab ${activeTab === 'submit' ? 'active' : ''}`}
          onClick={() => handleTabChange('submit')}
        >
          Submit an Entry
        </button>
        <button
          className={`contact-tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabChange('about')}
        >
          Evidence for Justice Lab
        </button>
      </div>

      {activeTab === 'about' ? (
        <About />
      ) : (
        <div className="contact-main">
          <div className="contact-form-section">
            <h1 className="contact-form-title">Submit an AI Deployed Tool</h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="domain">Domain</label>
                <p className="form-hint">Indicate the category the deployed AI tool falls under</p>
                <select
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a domain</option>
                  <option value="Backend Administration">Backend Administration</option>
                  <option value="Detection">Detection</option>
                  <option value="Forensic Analysis">Forensic Analysis</option>
                  <option value="Front End Service">Front End Service</option>
                  <option value="Prediction">Prediction</option>
                  <option value="Surveillance">Surveillance</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Brief introduction, relevant information, personal insights, etc."
                  rows="5"
                />
              </div>

              <div className="form-group">
                <label htmlFor="articleLink">Article Link</label>
                <input
                  type="url"
                  id="articleLink"
                  name="articleLink"
                  value={formData.articleLink}
                  onChange={handleChange}
                  placeholder="https://article/pddeploysai/link"
                />
              </div>

              <div className="form-group">
                <p className="form-question">Is your submission about an AI Task Force?</p>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="aiTaskForce"
                      value="Yes"
                      checked={formData.aiTaskForce === 'Yes'}
                      onChange={handleChange}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="aiTaskForce"
                      value="No"
                      checked={formData.aiTaskForce === 'No'}
                      onChange={handleChange}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>

          <div className="submission-criteria-section">
            <h1 className="submission-criteria-title">Submission Criteria</h1>
            <div className="criteria-content">
              <p>Content for submission criteria will be added here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
