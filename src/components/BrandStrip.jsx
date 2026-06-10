import React from 'react';
import { assets } from '../assets.js';

export default function BrandStrip() {
  return (
    <section className="brand-strip">
      <div className="container">
        <h2>Expert Auto Care</h2>
        <p>Servicing all vehicle makes with precision and reliability.</p>
        <div className="brand-row">
          {assets.brands.map((brand) => (
            <div className="brand-logo" key={brand.name}>
              <img src={brand.path} alt={brand.name} />
              <small>{brand.name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
