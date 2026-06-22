import React from 'react';
import { assets } from '../assets.js';

export default function BrandStrip() {
  return (
    <section className="brand-strip">
      <div className="container">
        <h2>Expert Auto Care</h2>
        <p>Servicing all vehicle makes with precision and reliability.</p>
        <div className="brand-row">
          {assets.brands.map((brand) => {
            const name = brand.path.split('/').pop().replace('.svg', '');
            return (
              <div className="brand-logo" key={name}>
                <img src={brand.path} alt={`${name} logo`} />
                {/* <small>{name}</small> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
