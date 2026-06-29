import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { assets } from '../assets.js';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      {/* Top Section */}
      <div className="footer-top-section">
        <div className="container footer-top-content">
          <div className="footer-headings">
            <h2>Professional Car Care, Delivered to Your Door</h2>
            <p>Fast, reliable, and convenient vehicle servicing wherever you are.</p>
          </div>
          <div className="footer-top-actions">
            <a href="/#book" className="btn-book-service">Book a Service</a>
          </div>
          
          {/* Logo overlapping element */}
          <div className="footer-overlap-logo">
            <img src={assets.logo} alt="Noren Automotive" />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle-section">
        <div className="container footer-links-grid">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/#how">How It Works</a></li>
              <li><a href="/#reviews">Testimonials</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services">Oil Change</a></li>
              <li><a href="/services">Battery Service</a></li>
              <li><a href="/services">Brake Service</a></li>
              <li><a href="/services">AC Service</a></li>
              <li><a href="/services">Vehicle Diagnostics</a></li>
              <li><a href="/services">General Maintenance</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul>
              <li>0314 1133859</li>
              <li>Karachi, Pakistan</li>
              <li>Tue - Sun</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom-section">
        <div className="container footer-bottom-content">
          <p className="copyright">&copy; 2026 Noren Automotive. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} fill="currentColor" /></a>
            <a href="https://www.instagram.com/noren.automotive/" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} fill="currentColor" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
