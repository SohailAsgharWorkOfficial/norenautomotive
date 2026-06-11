import React from 'react';
import { assets } from '../assets.js';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Noren Automotive home">
          <img src={assets.logo} alt="Noren Automotive" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#book">Book Now</a>
      </div>
    </header>
  );
}
