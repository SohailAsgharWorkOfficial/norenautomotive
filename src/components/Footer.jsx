import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h2>Professional Car Care, Delivered to Your Door</h2>
            <p>Fast, reliable, and convenient vehicle servicing wherever you are.</p>
          </div>
          <a href="#book">Book a Service</a>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">N</span>
            <strong>NOREN</strong>
            <small>AUTOMOTIVE</small>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#packages">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Our Services</h3>
            <a href="#services">Oil Change</a>
            <a href="#services">Battery Service</a>
            <a href="#services">Engine Service</a>
            <a href="#services">Full Service</a>
            <a href="#services">Internal Maintenance</a>
          </div>
          <div>
            <h3>Contact Info</h3>
            <p>0323 1234567</p>
            <p>Karachi, Pakistan</p>
            <p>9am - 9pm</p>
          </div>
        </div>
      </div>
      <div className="copyright">© 2026 Noren Automotive. All Rights Reserved.</div>
    </footer>
  );
}
