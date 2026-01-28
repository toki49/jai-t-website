import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import About from './About';
// import FAQ from './FAQ'; // Uncomment if needed

// Initialize EmailJS
emailjs.init('TuBuPBcdF9zZd2Haw');

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    if (location.pathname === '/contact/about') return 'about';
    if (location.pathname === '/contact/faq') return 'faq';
    return 'submit';
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    if (tab === 'about') navigate('/contact/about');
    else if (tab === 'faq') navigate('/contact/faq');
    else navigate('/contact');
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    
    emailjs.sendForm(
      'service_9j2x407',
      'template_ygz9ced',
      formRef.current,
      'TuBuPBcdF9zZd2Haw'
    ).then(() => {
      fetch('https://script.google.com/macros/s/AKfycbxvWB_Kr4-RiSLOOrHQOxsN44Kqd3l4Ft8Pa4BizTdUsn_ab8J4QaT6Tgb6zG23mXB7/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          formType: 'submit_an_entry',
          ...formData,
          submission_date: timestamp
        }).toString()
      })
      .then(res => res.json())
      .catch(err => console.error(err));

      alert('Thank you for submitting an entry!');
      setFormData({ fullName: '', email: '', additionalInfo: '', articleLink: '', aiTaskForce: '', submission_date: '' });
    }, (error) => {
      alert('Failed to send email.');
      console.log(error);
    });
  };

  return (
    <div className="flex-1 bg-[#f5f5f0] min-h-[calc(100vh-200px)] font-['Source_Sans_3',_sans-serif]">
      {/* Tabs Navigation */}
      <div className="border-b-2 border-[#161616]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 flex gap-4">
          <button
            onClick={() => handleTabChange('about')}
            className={`px-8 py-4 text-[1.2rem] font-medium transition-all duration-200 border-b-4 -mb-[2px] ${
              activeTab === 'about' 
              ? 'text-[#0097b2] border [#0097b2] font-semibold' 
              : 'text-gray-500 border-transparent hover:text-gray-800 hover:bg-black/5'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleTabChange('submit')}
            className={`px-8 py-4 text-[1.2rem] font-medium transition-all duration-200 border-b-4 -mb-[2px] ${
              activeTab === 'submit' 
              ? 'text-[#0097b2] border-[#0097b2] font-semibold' 
              : 'text-gray-500 border-transparent hover:text-gray-800 hover:bg-black/5'
            }`}
          >
            Submit an Entry
          </button>
        </div>
      </div>

      {activeTab === 'about' && <About />}

      {activeTab === 'submit' && (
        <div className="max-w-[1400px] mx-auto p-6 md:p-12 flex flex-col lg:flex-row gap-8 mb-8">
          
          {/* Left: Criteria Section */}
          <div className="flex-1 bg-white p-6 md:p-10 rounded-lg shadow-sm h-fit lg:min-h-[300px]">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Submission Criteria</h1>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-4">If you know about an AI tool being used that we missed please submit an entry.</p>
              <p className="mb-4">Two questions to think about is whether the technology is:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Used within the criminal justice system?</li>
                <li>Explicitly mentions the use of artificial intelligence?</li>
              </ul>
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="flex-[1.5] bg-white p-6 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Submit or Provide Feedback on AI Deployed Tool</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="font-medium text-gray-800">Full name</label>
                <input
                  type="text" id="fullName" name="fullName"
                  value={formData.fullName} onChange={handleChange} required
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2d5016] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-gray-800">Email</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange} required
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2d5016] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="additionalInfo" className="font-medium text-gray-800">Additional Information</label>
                <textarea
                  id="additionalInfo" name="additionalInfo"
                  value={formData.additionalInfo} onChange={handleChange}
                  placeholder="Brief introduction, relevant information, personal insights, etc."
                  rows="5"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2d5016] transition-colors resize-vertical min-h-[120px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="articleLink" className="font-medium text-gray-800">Article Link</label>
                <input
                  type="url" id="articleLink" name="articleLink"
                  value={formData.articleLink} onChange={handleChange}
                  placeholder="https://article/pddeploysai/link"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2d5016] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-medium text-gray-800">Is your submission about an AI Task Force?</p>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                    <input
                      type="radio" name="aiTaskForce" value="Yes"
                      checked={formData.aiTaskForce === 'Yes'} onChange={handleChange}
                      className="w-[18px] h-[18px] accent-[#0097b2]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                    <input
                      type="radio" name="aiTaskForce" value="No"
                      checked={formData.aiTaskForce === 'No'} onChange={handleChange}
                      className="w-[18px] h-[18px] accent-[#0097b2]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="self-center mt-4 px-8 py-4 bg-[#0097b2] hover:bg-[#bb9f4b] text-white text-[1.1rem] font-semibold rounded transition-colors duration-200 shadow-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
