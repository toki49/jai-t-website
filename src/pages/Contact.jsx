import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import About from './About';
import './Contact.css';

function Contact() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname === '/contact' || location.pathname === '/contact/about' ? 'about' : 'submit'
  );

  const navigate = useNavigate();

  // Update tab when route changes
  useEffect(() => {
    if (location.pathname === '/contact/about' || location.pathname === '/contact') {
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
          className={`contact-tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabChange('about')}
        >
        Evidence for Justice Lab
        </button>
        <button
          className={`contact-tab ${activeTab === 'submit' ? 'active' : ''}`}
          onClick={() => handleTabChange('submit')}
        >
          Submit an Entry
        </button>
      </div>

      {activeTab === 'about' ? (
        <About />
      ) : (
        <div className="contact-main">
          <div className="submission-criteria-section">
            <h1 className="submission-criteria-title">Submission Criteria</h1>
            <div className="criteria-content">
              <div className="criteria-item">
                <h3>1. Tool Must Be Used Within the Justice System</h3>
                <p>Submitted tools must be actively used—or previously used—by agencies or actors within the justice system. This includes:</p>
                <ul>
                  <li>Police departments and law enforcement agencies</li>
                  <li>Courts and judicial systems</li>
                  <li>Corrections institutions (jails, prisons, probation, parole)</li>
                  <li>Related public-safety or investigative units</li>
                </ul>
                <p>Tools used in unrelated policy areas (e.g., traffic flow management, housing, general government services) should not be submitted unless you can clearly identify their direct use within justice-system operations.</p>
              </div>

              <div className="criteria-item">
                <h3>2. Tool Must Involve Artificial Intelligence</h3>
                <p>Submissions must reflect technologies that use artificial intelligence, not simply automation. Qualifying examples include:</p>
                <ul>
                  <li>Machine learning systems</li>
                  <li>Predictive analytics models</li>
                  <li>Facial recognition or biometric systems</li>
                  <li>AI-powered surveillance or detection tools</li>
                  <li>Generative AI used by courts, lawyers, or justice personnel</li>
                </ul>
                <p>Automated systems without AI components (e.g., standard databases, simple rule-based alerts) do not meet criteria.</p>
              </div>

              <div className="criteria-item">
                <h3>3. Tool Must Be Deployed, Active, or Documented as a Confirmed Pilot</h3>
                <p>We accept submissions that demonstrate:</p>
                <ul>
                  <li>Current active use</li>
                  <li>Past use by a justice-system agency</li>
                  <li>Confirmed pilot programs with documented plans or vendor partnerships</li>
                </ul>
                <p>Submissions based on speculation, proposals, early-stage ideas, or hypothetical future use will not be accepted.</p>
              </div>

              <div className="criteria-item">
                <h3>4. Location Must Be Clearly Identified</h3>
                <p>Please specify the city and state where the tool is deployed. Articles or reports that reference a county, region, or state must clearly indicate that the tool is used in a specific city to qualify.</p>
              </div>

              <div className="criteria-item">
                <h3>5. Source Information Must Be Verifiable</h3>
                <p>Submitters should provide at least one publicly available, credible source confirming the tool's use. Acceptable sources include:</p>
                <ul>
                  <li>News articles</li>
                  <li>Press releases</li>
                  <li>Official agency statements or reports</li>
                  <li>Court filings or public documentation</li>
                </ul>
                <p>We cannot accept submissions based on hearsay, social media posts without verification, or paywalled sources without accessible alternatives.</p>
              </div>

              <div className="criteria-item">
                <h3>6. Provide as Much Detail as Possible</h3>
                <p>To support our research team's review process, please include:</p>
                <ul>
                  <li>A brief description of the AI tool</li>
                  <li>How and why it is being used</li>
                  <li>The agency or department using the tool</li>
                  <li>Any known vendors or technology providers</li>
                  <li>Context or insights about deployment, impact, or community response</li>
                </ul>
                <p>More detailed submissions help ensure accurate classification and contribution to the national Justice AI dataset.</p>
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
        </div>
      )}
    </div>
  );
}

export default Contact;

