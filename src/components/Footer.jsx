import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { assets } from '../assets.js';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-top-copy">
            <h2>Professional Car Care, Delivered to Your Door</h2>
            <p>Fast, reliable, and convenient vehicle servicing wherever you are.</p>
          </div>
          <a className="footer-book" href="#book">Book a Service</a>
          <div className="footer-logo-wrap">
            <img src={assets.logo} alt="Noren Automotive" />
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#how">How It Works</a>
            <a href="#reviews">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Our Services</h3>
            <a href="#services">Oil Change</a>
            <a href="#services">Battery Service</a>
            <a href="#services">Brake Service</a>
            <a href="#services">AC Service</a>
            <a href="#services">Vehicle Diagnostics</a>
            <a href="#services">General Maintenance</a>
          </div>
          <div>
            <h3>Contact Info</h3>
            <p>0314 113859</p>
            <p>Karachi, Pakistan</p>
            <p>Tue - Sun</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Noren Automotive. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
