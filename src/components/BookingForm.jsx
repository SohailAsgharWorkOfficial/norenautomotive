import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { assets } from '../assets.js';

export default function BookingForm({ compact = false }) {
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Controlled form states matching the exact fields
  const [formData, setFormData] = useState({
    fullName: '',
    vehicleModel: '',
    phone: '',
    service: '',
    location: ''
  });

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.service) {
      alert("Please fill in all required fields (*)");
      return;
    }

    setIsSending(true);

    const templateParams = {
      fullName: formData.fullName,
      vehicleModel: formData.vehicleModel || 'Not Specified',
      phone: formData.phone,
      service: formData.service,
      location: formData.location || 'Not Specified'
    };

    emailjs.send(
      'service_vlpipyn', 
      'template_lxywaij', 
      templateParams,
      'wUp-MhJu7lQHGo4hp'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setShowSuccessModal(true);
      setFormData({
        fullName: '',
        vehicleModel: '',
        phone: '',
        service: '',
        location: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Submission failed. Please check your EmailJS dashboard configs.");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  // Premium Custom Success Modal
  const SuccessOverlay = () => (
    <div className="booking-success-overlay">
      <div className="booking-success-card">
        <div className="success-icon-badge">✓</div>
        <h3>Form Submitted Successfully!</h3>
        <p>Thank you for choosing our service. Our team will contact you shortly to confirm your schedule.</p>
        <button type="button" onClick={() => setShowSuccessModal(false)}>Close</button>
      </div>
    </div>
  );

  // Premium Animated Processing Loader
  const FullScreenLoader = () => (
    <div className="booking-loading-overlay">
      <div className="booking-loading-card">
        <div className="booking-spinner"></div>
        <p className="loading-text-main">Submitting Your Details</p>
        <p className="loading-text-sub">Please wait while we secure your doorstep booking slot...</p>
      </div>
    </div>
  );

  if (compact) {
    return (
      <div style={{ position: 'relative' }}>
        <form onSubmit={handleFormSubmit} className="booking-card booking-card-compact">
          <h3>Book Your Service</h3>
          
          <label>
            <span>Full Name *</span>
            <input 
              type="text" 
              required
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter Your Full Name" 
            />
          </label>

          <label>
            <span>Vehicle Model</span>
            <input 
              type="text" 
              value={formData.vehicleModel}
              onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
              placeholder="Enter Your Vehicle Model" 
            />
          </label>

          <label>
            <span>Phone No. *</span>
            <div className="phone-field compact">
              <em>+92</em>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="300-0000000" 
              />
            </div>
          </label>

          <label>
            <span>Select Service *</span>
            <select 
              required
              value={formData.service} 
              onChange={(e) => handleInputChange('service', e.target.value)}
            >
              <option value="" disabled>Select Service</option>
              <option value="Service & Maintenance">Service & Maintenance</option>
              <option value="Oil & Filter Change">Oil & Filter Change</option>
              <option value="Diagnostics & Inspection">Diagnostics & Inspection</option>
              <option value="Filter Check & Replacement">Filter Check & Replacement</option>
              <option value="General Repairs">General Repairs</option>
              <option value="Battery Services">Battery Services</option>
            </select>
          </label>

          <label>
            <span>Location</span>
            <input 
              type="text" 
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="Enter Your Location" 
            />
          </label>

          <button type="submit" disabled={isSending}>
            {isSending ? 'Please wait...' : 'Book a Service'}
          </button>
        </form>

        {isSending && <FullScreenLoader />}
        {showSuccessModal && <SuccessOverlay />}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleFormSubmit} className="booking-card">
        <div className="booking-title">
          <h2>Book Your Service</h2>
          <p>Get professional car care at your doorstep.</p>
        </div>
        
        {assets?.bookingLogo && (
          <img className="booking-watermark" src={assets.bookingLogo} alt="" aria-hidden="true" />
        )}
        
        <label>
          <span>Full Name *</span>
          <input 
            type="text" 
            required
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Enter Your Full Name" 
          />
        </label>
        
        <label>
          <span>Vehicle Model</span>
          <input 
            type="text" 
            value={formData.vehicleModel}
            onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
            placeholder="Enter Your Vehicle Model" 
          />
        </label>
        
        <label>
          <span>Phone No. *</span>
          <div className="phone-field">
            <em>+92</em>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="300-0000000" 
            />
          </div>
        </label>
        
        <label>
          <span>Select Service *</span>
          <select 
            required
            value={formData.service} 
            onChange={(e) => handleInputChange('service', e.target.value)}
          >
            <option value="" disabled>Select Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Oil & Filter Change">Oil & Filter Change</option>
            <option value="Diagnostics & Inspection">Diagnostics & Inspection</option>
            <option value="Filter Check & Replacement">Filter Check & Replacement</option>
            <option value="General Repairs">General Repairs</option>
            <option value="Battery Services">Battery Services</option>
          </select>
        </label>
        
        <label>
          <span>Location</span>
          <input 
            type="text" 
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="Enter Your Location" 
          />
        </label>
        
        <button type="submit" disabled={isSending}>
          {isSending ? 'Please wait...' : 'Book a Service'}
        </button>
      </form>

      {isSending && <FullScreenLoader />}
      {showSuccessModal && <SuccessOverlay />}
    </div>
  );
}