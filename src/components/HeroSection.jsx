import React from 'react';
import BookingForm from './BookingForm.jsx';
import { assets } from '../assets.js';

export default function HeroSection() {
  return (
    <section className="hero" id="home" style={{ '--hero-bg': `url("${assets.hero}")` }}>
      <div className="hero-overlay">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Professional Car Service <span>at Your Doorstep</span></h1>
            <p>
              Skip the workshop queues. Our certified technicians come to your home, office,
              or anywhere you are to provide fast, reliable, and affordable car maintenance
              and servicing.
            </p>
            <div className="hero-actions">
              <a href="#book" className="btn btn-primary">Book a Service</a>
              <a href="#packages" className="btn btn-dark">Get a Free Quote</a>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
