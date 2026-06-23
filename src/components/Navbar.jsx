import React, { useState } from 'react';
import { assets } from '../assets.js';

export default function Navbar({ className = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = window.location.pathname;

  const isServicesPage = path === '/services';
  const isPackagesPage = path === '/packages';
  const isAboutPage = path === '/about';
  const isFAQPage = path === '/faq';
  const isHomePage = path === '/';

  return (
    <header className={`navbar ${className}`.trim()}>
      <div className="container nav-inner">
        {/* Mobile Hamburger Staggered Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Brand Link */}
        <a className="brand" href="/" aria-label="Noren Automotive home">
          <img src={assets.logo} alt="Noren Automotive" />
        </a>

        {/* Dynamic Navigation Container */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <a className={isHomePage ? 'active' : undefined} href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a className={isServicesPage ? 'active' : undefined} href="/services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className={isPackagesPage ? 'active' : undefined} href="/packages" onClick={() => setIsMenuOpen(false)}>Packages</a>
          <a className={isAboutPage ? 'active' : undefined} href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a className={isFAQPage ? 'active' : undefined} href="/faq" onClick={() => setIsMenuOpen(false)}>FAQs</a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        {/* Desktop CTA Element */}
        <a className="nav-cta" href={isPackagesPage ? '#packages' : (isServicesPage || isAboutPage || isFAQPage) ? '#book' : '/#book'}>
          Book Now
        </a>

        {/* Mobile Call Block Interface Card */}
        <a className="mobile-call-action" href="tel:+1234567890" aria-label="Call Noren Automotive">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="phone-icon">
            <path d="M4.97 2.84C5.32 2.45 5.85 2.25 6.36 2.33L9.62 2.81C10.15 2.89 10.59 3.27 10.73 3.78L11.83 7.79C11.96 8.27 11.81 8.78 11.45 9.12L9.43 11.02C10.7 13.29 12.56 15.11 14.86 16.34L16.8 14.23C17.15 13.85 17.68 13.7 18.16 13.84L22.13 14.99C22.64 15.14 23.01 15.59 23.08 16.12L23.54 19.46C23.61 19.98 23.4 20.5 23 20.84C21.41 22.17 19.34 22.95 17.08 22.95C9.31 22.95 3 16.63 3 8.87C3 6.57 3.8 4.46 5.15 2.85L4.97 2.84Z" />
          </svg>
        </a>
      </div>
    </header>
  );
}