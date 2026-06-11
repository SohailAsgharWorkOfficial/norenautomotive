import React from 'react';
import { assets } from '../assets.js';

export default function Navbar({ className = '' }) {
  const path = window.location.pathname;
  const isServicesPage = path === '/services';
  const isPackagesPage = path === '/packages';
  const isHomePage = path === '/';

  return (
    <header className={`navbar ${className}`.trim()}>
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Noren Automotive home">
          <img src={assets.logo} alt="Noren Automotive" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className={isHomePage ? 'active' : undefined} href="/">Home</a>
          <a className={isServicesPage ? 'active' : undefined} href="/services">Services</a>
          <a className={isPackagesPage ? 'active' : undefined} href="/packages">Packages</a>
          <a href="/#about">About</a>
          <a href="/#faq">FAQs</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={isPackagesPage ? '#packages' : isServicesPage ? '#book' : '/#book'}>Book Now</a>
      </div>
    </header>
  );
}
