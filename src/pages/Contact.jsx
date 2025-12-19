import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import About from './About';
import FAQ from './FAQ';
import './Contact.css';

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
    
    // EmailJS configuration - Replace these with your actual values
    const serviceId = 'service_9j2x407';  // Get from EmailJS dashboard
    const templateId = 'template_ygz9ced';  // Get from EmailJS dashboard
    const publicKey = 'TuBuPBcdF9zZd2Haw';  // Get from EmailJS dashboard
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      domain: formData.domain,
      additional_info: formData.additionalInfo || 'No additional information provided',
      article_link: formData.articleLink || 'No link provided',
      ai_taskforce: formData.aiTaskForce || 'Not specified',
      submission_date: new Date().toLocaleString()
    };
    
    // Send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
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
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('There was an error submitting your form. Please try again or contact us directly at evidenceforjustice@georgetown.edu');
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
                <p>

If you know about an AI tool being used that we missed please submit an entry. 
</p>
                <p> 
Two questions to think about is whether the technology is:</p>
                <ul>
                  <li>Used within the criminal justice system?</li>
                   <li>Explicitly mentions the use of artificial intelligence?</li>
                </ul>
              </div>
            </div>
          </div>

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

