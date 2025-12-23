import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './DownloadModal.css';

// Initialize EmailJS here
emailjs.init('TuBuPBcdF9zZd2Haw');

function DownloadModal({ isOpen, onClose, onDownload }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Use emailjs.sendForm to send the form DOM node
    emailjs.sendForm(
      'service_puyofwf',
      'template_x1yd4mj',
      formRef.current,
      'TuBuPBcdF9zZd2Haw'
    ).then(() => {
      // Send data to Google Sheets via Apps Script Web App
      fetch('https://script.google.com/macros/s/AKfycbxwFQP2O0Mx9mkkeW8LKaRHh0q7s-voR_qmfWbEk6zlVUrdTLeytKTT5_bKOnv3Gj5t/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'download_csv',
          name: formData.name,
          email: formData.email,
          organization: formData.organization
        })
      });
      alert('Thank you for showing interest in JAI-T! We will send you the jait-data.csv shortly.');
      // Reset form
      setFormData({ name: '', email: '', organization: '' });
      setErrors({});
      onClose();
    }, (error) => {
      alert('Failed to send email. Please try again later.');
      console.log(error);
    });
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      organization: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>&times;</button>
        
        <h2 className="modal-title">Retrieve JAI-T Database</h2>
        <p className="modal-description">
          Please provide your contact information to download the database.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="download-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="organization">Organization *</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className={errors.organization ? 'error' : ''}
              placeholder="Enter your organization"
            />
            {errors.organization && <span className="error-message">{errors.organization}</span>}
          </div>

          <div className="modal-actions">
            <button type="button" onClick={handleClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-download">
              Submit Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DownloadModal;