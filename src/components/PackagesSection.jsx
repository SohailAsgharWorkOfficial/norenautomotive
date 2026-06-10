import React from 'react';
import { Check, Car } from 'lucide-react';

const featuresA = ['Premium Body Cleaning', 'Fluid System Cleaning', 'Spark Plugs & Coil Service', 'Air & AC Filter Cleaning', 'Computer Diagnostics', 'Brake & AC Inspection'];
const featuresB = ['All Standard Package Services', 'Advanced Engine Cleaning', 'Full Sensor Cleaning', 'Deep Throttle Service', 'Engine Performance Optimization', 'ECU Calibration'];
const rows = [
  ['800cc - 1000cc', 'PKR 4,800', 'PKR 6,450'],
  ['1100cc - 1600cc', 'PKR 5,750', 'PKR 7,500'],
  ['1700cc - 2000cc', 'PKR 6,950', 'PKR 8,900'],
  ['2400cc - 2800cc', 'PKR 7,900', 'PKR 9,900'],
  ['3000cc & Above', 'PKR 8,900', 'PKR 10,900'],
];

function PackageCard({ title, items, premium }) {
  return (
    <article className={premium ? 'package-card premium' : 'package-card'}>
      <div className="package-card-head">
        <h3>{title}</h3>
        {premium && <span>Most recommended</span>}
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}><Check size={15} />{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function PackagesSection() {
  return (
    <section className="packages" id="packages">
      <div className="container narrow">
        <div className="section-head centered">
          <h2>Service Packages</h2>
          <p>Choose the package that best suits your vehicle's maintenance and performance requirements.</p>
        </div>
        <div className="package-cards">
          <PackageCard title="Standard Package" items={featuresA} />
          <PackageCard title="Premium Plus Package" items={featuresB} premium />
        </div>
        <div className="price-table">
          <div className="price-heading"><span></span><strong>Standard Package</strong><strong>Premium Plus Package</strong></div>
          {rows.map(([cc, standard, premium]) => (
            <div className="price-row" key={cc}>
              <span><Car size={20} />{cc}</span>
              <strong>{standard}</strong>
              <strong>{premium}</strong>
            </div>
          ))}
        </div>
        <a className="book-now" href="#book">Book Now</a>
      </div>
    </section>
  );
}
