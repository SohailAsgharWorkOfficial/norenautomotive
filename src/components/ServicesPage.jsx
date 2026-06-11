import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BookingForm from './BookingForm.jsx';

const services = [
  {
    title: 'Service & Maintenance',
    image: '/assets/services/service-maintenance.png',
    text: 'Comprehensive routine maintenance services designed to keep your vehicle running safely, efficiently, and reliably while helping prevent unexpected breakdowns and costly repairs.',
    points: [
      'Complete vehicle health check',
      'Fluid level inspection and top-up',
      'Brake and suspension inspection',
      'Preventive maintenance recommendations',
    ],
  },
  {
    title: 'Oil & Filter Change',
    image: '/assets/services/oil-filter.png',
    text: 'Professional engine oil and filter replacement using quality products to improve engine performance, enhance fuel efficiency, and extend engine life.',
    points: ['Engine oil replacement', 'Oil filter replacement', 'Fluid inspection', 'Service reminder reset'],
  },
  {
    title: 'Diagnostics & Inspection',
    image: '/assets/services/diagnostics.png',
    text: 'Advanced vehicle diagnostics and detailed inspections to identify performance issues early and provide accurate recommendations before major repairs are needed.',
    points: [
      'Computerized diagnostics',
      'Warning light inspection',
      'Engine performance analysis',
      'Detailed health report',
    ],
  },
  {
    title: 'Filter Check & Replacement',
    image: '/assets/services/filters.png',
    text: 'Complete inspection and replacement of air and cabin filters to improve airflow, enhance comfort, and maintain optimal vehicle performance.',
    points: ['Air filter inspection', 'Cabin filter inspection', 'Filter replacement if required', 'Performance check'],
  },
  {
    title: 'General Repairs',
    image: '/assets/services/repairs.png',
    text: 'Reliable mechanical repair services for common vehicle issues, component replacements, and maintenance tasks performed conveniently at your location.',
    points: ['Minor mechanical repairs', 'Component replacement', 'System inspections', 'Post-repair testing'],
  },
  {
    title: 'Battery Services',
    image: '/assets/services/battery.png',
    text: 'Battery testing, charging, jump-start assistance, and replacement services to ensure dependable vehicle starting performance and electrical system reliability.',
    points: ['Battery health testing', 'Jump-start assistance', 'Charging system inspection', 'Battery replacement service'],
  },
];

const trustItems = [
  ['Genuine Products', 'Only authentic products sourced from trusted suppliers.'],
  ['Trusted Brands', 'Recognized brands known for quality and reliability.'],
  ['Better Vehicle Performance', 'Quality components help your vehicle perform at its best.'],
];

export default function ServicesPage() {
  return (
    <>
      <Navbar className="navbar-services" />
      <main className="services-page" id="home">
        <section className="services-hero" id="top" aria-label="Doorstep car service">
          <div className="container services-hero-inner">
            <h1>Doorstep Car Service Made Simple</h1>
            <p>
              Professional automotive maintenance and repairs delivered to your location by experienced
              technicians. Convenient, transparent, and hassle-free.
            </p>
            <div className="services-hero-actions">
              <a href="#book" className="services-primary-btn">Book a Service</a>
              <a href="#services" className="services-outline-btn">Get a Free Quote</a>
            </div>
          </div>
        </section>

        <section className="services-catalog" id="services">
          <div className="container">
            <div className="services-page-head">
              <h2>Professional Automotive Services</h2>
              <p>
                Keep your vehicle performing at its best with expert doorstep maintenance, diagnostics,
                and repair services. Our certified technicians bring professional automotive care directly
                to your home, office, or preferred location, saving you time while ensuring quality
                workmanship and reliable results.
              </p>
            </div>
            <div className="services-page-grid">
              {services.map((service) => (
                <article className="services-page-card" key={service.title}>
                  <img src={service.image} alt="" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <Check size={13} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#book">Book Now</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-map" id="book">
          <div className="services-map-overlay">
            <div className="container services-map-grid">
              <div className="services-map-copy">
                <h2>Serving Major Areas Across Karachi</h2>
                <p>
                  Our mobile automotive team proudly provides professional doorstep car care across Karachi.
                  Whether you are at home, the office, or your workplace, our technicians are ready to deliver
                  reliable service directly to your location.
                </p>
              </div>
              <BookingForm compact />
            </div>
          </div>
        </section>

        <section className="trusted-brands">
          <div className="container">
            <div className="services-page-head">
              <h2>Powered By Pakistan's Most Trusted Automotive Brands</h2>
              <p>
                We use genuine oils, filters, batteries, and replacement parts from industry-leading brands
                to deliver reliable performance, maximum protection, and complete peace of mind.
              </p>
            </div>
            <div className="trusted-grid">
              <div className="trusted-photo-wrap">
                <img src="/assets/services/trusted-brands.png" alt="Trusted oils, batteries, filters and brake parts" />
              </div>
              <div className="trusted-copy">
                <h2>QUALITY YOU CAN TRUST</h2>
                <div className="trust-list">
                  {trustItems.map(([title, text]) => (
                    <div className="trust-item" key={title}>
                      <span><ShieldCheck size={17} /></span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
