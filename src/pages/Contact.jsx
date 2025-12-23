import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import About from './About';
import FAQ from './FAQ';
import './Contact.css';

// Initialize EmailJS here
emailjs.init('TuBuPBcdF9zZd2Haw');

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active tab based on route
  const getActiveTab = () => {
    if (location.pathname === '/contact/about') return 'about';
    if (location.pathname === '/contact/faq') return 'faq';
    return 'submit';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Update tab when route changes
  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location.pathname]);
  
  const handleTabChange = (tab) => {
    if (tab === 'about') {
      navigate('/contact/about');
    } else if (tab === 'faq') {
      navigate('/contact/faq');
    } else {
      navigate('/contact');
    }
  };
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    additionalInfo: '',
    articleLink: '',
    aiTaskForce: '',
    submission_date: ''
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
    // Set submission date in formData
    setFormData(prev => ({ ...prev, submission_date: new Date().toLocaleString() }));
    emailjs.sendForm(
      'service_9j2x407',
      'template_ygz9ced',
      formRef.current,
      'TuBuPBcdF9zZd2Haw'
    ).then(() => {
      // Send data to Google Sheets via Apps Script Web App
      e.preventDefault();
      fetch('https://script.google.com/macros/s/AKfycbxvWB_Kr4-RiSLOOrHQOxsN44Kqd3l4Ft8Pa4BizTdUsn_ab8J4QaT6Tgb6zG23mXB7/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          formType: 'submit_an_entry',
          fullName: formData.fullName,
          email: formData.email,
          additionalInfo: formData.additionalInfo,
          articleLink: formData.articleLink,
          aiTaskForce: formData.aiTaskForce,
          submission_date: formData.submission_date
        }).toString()
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));  

      alert('Thank you for submitting an entry! We appreciate your contribution.');
      setFormData({
        fullName: '',
        email: '',
        additionalInfo: '',
        articleLink: '',
        aiTaskForce: '',
        submission_date: ''
      });
    }, (error) => {
      alert('Failed to send email. Please try again later.');
      console.log(error);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-tabs">
        <button
          className={`contact-tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabChange('about')}
        >
          About Us
        </button>
        {/* <button
          className={`contact-tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => handleTabChange('faq')}
        >
          FAQs
        </button> */}
        <button
          className={`contact-tab ${activeTab === 'submit' ? 'active' : ''}`}
          onClick={() => handleTabChange('submit')}
        >
          Submit an Entry
        </button>
      </div>

      {activeTab === 'about' && <About />}
      {/* {activeTab === 'faq' && <FAQ />} */}
      {activeTab === 'submit' && (
        <div className="contact-main">
          <div className="submission-criteria-section">
            <h1 className="submission-criteria-title">Submission Criteria</h1>
            <div className="criteria-content">
              <div className="criteria-item">
                <p>If you know about an AI tool being used that we missed please submit an entry.</p>
                <p>Two questions to think about is whether the technology is:</p>
                <ul>
                  <li>Used within the criminal justice system?</li>
                   <li>Explicitly mentions the use of artificial intelligence?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h1 className="contact-form-title">Submit an AI Deployed Tool</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
        </div>
      )}
    </div>
  );
}


export default Contact;

