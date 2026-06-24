import React, { useMemo, useState } from 'react';
import {
  BatteryCharging,
  Car,
  Grid2X2,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { assets } from '../assets.js'; 

const categories = [
  { title: 'General Services', icon: Grid2X2 },
  { title: 'Booking & Doorstep Service', icon: MapPin },
  { title: 'Vehicle Maintenance', icon: Car },
  { title: 'Engine Performance & Diagnostics', icon: Stethoscope },
  { title: 'Battery, Tires & Safety', icon: BatteryCharging },
  { title: 'Quick Car Care Tips', icon: Sparkles },
];

const faqItems = [
  {
    question: 'What services does Noren Automotive provide?',
    answer: 'We provide doorstep oil changes, diagnostics, battery support, inspection, general maintenance, and quick repair assistance across Karachi.',
  },
  {
    question: 'What types of vehicles do you service?',
    answer: 'We service most passenger cars, SUVs, and light commercial vehicles.',
  },
  {
    question: 'How long does a typical service take?',
    answer: 'Most routine services take 45 to 90 minutes, depending on the service type, vehicle condition, and required inspection work.',
  },
  {
    question: 'Do you use professional equipment?',
    answer: 'Yes. Our technicians arrive with professional tools, diagnostic equipment, and quality service products for reliable doorstep care.',
  },
  {
    question: 'Why choose Noren Automotive?',
    answer: 'You save time, avoid workshop queues, get transparent pricing, and receive professional car care at your preferred location.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(1);
  const [query, setQuery] = useState('');

  // बदलाव: benefits को कॉम्पोनेंट के अंदर ले आए ताकि assets का सही पाथ लोड हो सके
  const benefits = [
    { title: 'Certified Technicians', iconImg: assets.certifiedIcon },
    { title: 'Doorstep Convenience', iconImg: assets.doorstepIcon },
    { title: 'Transparent Pricing', iconImg: assets.pricingIcon },
  ];

  const visibleFaqs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return faqItems;
    return faqItems.filter((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <>
      <Navbar />
      <main className="faq-page" id="home">
        <section className="faq-page-hero">
          <div className="container faq-page-hero-copy">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about our doorstep automotive services, booking process,
              service packages, pricing, and vehicle maintenance. Everything you need to know before
              booking with Noren Automotive.
            </p>
          </div>
        </section>

        <section className="faq-page-main" id="faq">
          <div className="container faq-page-grid">
            <aside className="faq-sidebar" aria-label="FAQ categories">
              <h2>FAQ Categories</h2>
              <div className="faq-category-list">
                {categories.map(({ title, icon: Icon }, index) => (
                  <button className={index === 0 ? 'active' : ''} type="button" key={title}>
                    <Icon size={16} />
                    <span>{title}</span>
                  </button>
                ))}
              </div>
              <div className="faq-help-card">
                <span><Mail size={24} /></span>
                <strong>I still have a question?</strong>
                <p>Our support team is here to help you</p>
                <a href="/#contact">Contact Us</a>
              </div>
            </aside>

            <div className="faq-content">
              <label className="faq-search">
                <input
                  type="search"
                  placeholder="Search your question..."
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setOpenIndex(-1);
                  }}
                />
                <Search size={17} />
              </label>

              <div className="faq-page-list">
                {visibleFaqs.map((item, index) => {
                  const open = index === openIndex;
                  return (
                    <article className={`faq-page-item ${open ? 'open' : ''}`} key={item.question}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? -1 : index)}
                        aria-expanded={open}
                      >
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <div>
                          <h3>{item.question}</h3>
                          {open && <p>{item.answer}</p>}
                        </div>
                        <strong>{open ? 'x' : '+'}</strong>
                      </button>
                    </article>
                  );
                })}
                {visibleFaqs.length === 0 && (
                  <p className="faq-empty">No matching questions found. Contact us and we will help.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOOK YOUR SERVICE TODAY (PIXEL PERFECT GEOMETRIC INTERFACE) */}
<section className="faq-service-cta" id="book">
  <div className="container faq-service-cta-inner layout-geometric-curve-wrapper">
    
    {/* Left Panel: Content Content Wrap */}
    <div className="faq-service-copy curved-content-shield">
      <h2>Book Your Service Today</h2>
      <p>
        Keep your vehicle running smoothly with professional automotive care delivered directly
        to your home, office, or preferred location. Fast, reliable, and hassle-free service
        whenever you need it.
      </p>
      
      {/* 3 Columns Benefits Matrix with direct SVG paths */}
      <div className="faq-benefits benefits-trio-grid">
        <div>
          {/* <img 
            src="/assets/faq/certified-technicians.svg" 
            alt="Certified Technicians" 
            className="faq-benefit-svg-asset" 
          /> */}
          <strong>Certified Technicians</strong>
        </div>
        <div>
          {/* <img 
            src="/assets/faq/certified-technicians.svg" 
            alt="Doorstep Convenience" 
            className="faq-benefit-svg-asset" 
          /> */}
          <strong>Doorstep Convenience</strong>
        </div>
        <div>
          {/* <img 
            src="/assets/faq/transparent-pricing.svg" 
            alt="Transparent Pricing" 
            className="faq-benefit-svg-asset" 
          /> */}
          <strong>Transparent Pricing</strong>
        </div>
      </div>
      
      <a href="/#contact" className="contact-us-trigger-btn">Contact Us</a>
    </div>
    
    {/* Right Panel: Standalone PNG Transparent Cutout Overlay */}
    <div className="faq-service-visual-overlay">
      <img 
        src="/assets/faq/faq-cta-visual.png" 
        alt="Noren Automotive expert technician with sedan cutout visual" 
        className="curved-section-cutout-img"
      />
    </div>

  </div>
</section>

        <section className="faq-subscribe">
          <div className="container faq-subscribe-inner">
            <div>
              <Mail size={31} />
              <span>
                <strong>I still have a question?</strong>
                <small>Our support team is here to help you</small>
              </span>
            </div>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}