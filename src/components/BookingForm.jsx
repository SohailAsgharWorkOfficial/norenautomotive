import React from 'react';
import { assets } from '../assets.js';

export default function BookingForm({ compact = false }) {
  if (compact) {
    return (
      <form className="booking-card booking-card-light">
        <h3>Book Your Service</h3>
        {['Name', 'Phone', 'Vehicle Model', 'Service', 'Location'].map((field) => (
          <label key={field}>
            <span>{field}</span>
            <input type="text" placeholder={field} />
          </label>
        ))}
        <button type="button">Book A Service</button>
      </form>
    );
  }

  return (
    <form className="booking-card">
      <div className="booking-title">
        <h2>Book Your Service</h2>
        <p>Get professional car care at your doorstep.</p>
      </div>
      <img className="booking-watermark" src={assets.bookingLogo} alt="" aria-hidden="true" />
      <label>
        <span>Full Name</span>
        <input type="text" placeholder="Enter Your full Name" />
      </label>
      <label>
        <span>Vehicle Model</span>
        <input type="text" placeholder="Enter Your full Name" />
      </label>
      <label>
        <span>Phone No.</span>
        <div className="phone-field">
          <em>+92</em>
          <input type="text" placeholder="000-0000000" />
        </div>
      </label>
      <label>
        <span>Select Service</span>
        <select defaultValue="">
          <option value="" disabled>Select Service</option>
          <option>Oil Change</option>
          <option>Car Inspection</option>
          <option>General Service</option>
        </select>
      </label>
      <label>
        <span>Location</span>
        <input type="text" placeholder="Enter Your Location" />
      </label>
      <button type="button">Book a Service</button>
    </form>
  );
}
