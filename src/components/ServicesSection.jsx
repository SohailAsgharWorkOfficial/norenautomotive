import React from 'react';
import { BatteryCharging, Car, Droplets, Gauge, Search, Settings } from 'lucide-react';

const services = [
  ['Service & Maintenance', 'Regular scheduled maintenance at your doorstep for reliable daily driving.', Settings],
  ['Oil & Filter Change', 'Premium engine oil and filter replacement to keep performance smooth.', Droplets],
  ['Diagnostics & Inspection', 'Advanced inspection and computer diagnostics for accurate fault finding.', Search],
  ['Filter Check & Replacement', 'Air, cabin, and engine filter inspection with recommended replacement.', Gauge],
  ['General Repairs', 'Minor mechanical repairs and adjustments performed by experienced technicians.', Car],
  ['Battery Services', 'Battery testing, charging, jump-start assistance, and replacement support.', BatteryCharging],
];

export default function ServicesSection() {
  return (
    <section className="services dark-section" id="services">
      <div className="container">
        <div className="section-head left">
          <div>
            <h2>Our Doorstep Services</h2>
            <p>
              Professional maintenance done efficiently at your home, office, or wherever your
              vehicle is parked.
            </p>
          </div>
          <a href="#book" className="red-link">Book Your Service Today</a>
        </div>
        <div className="service-grid">
          {services.map(([title, text, Icon], index) => (
            <article className={`service-card ${index === 0 ? 'active' : ''}`} key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Icon size={18} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
