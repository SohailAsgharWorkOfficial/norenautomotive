import React from 'react';
import { assets } from '../assets.js';

const steps = ['Book Your Service', 'Book Your Service', 'Book Your Service'];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container how-wrap">
        <div className="how-panel">
          <h2>How It Works</h2>
          <p>Getting your car serviced has never been easier.</p>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={`${step}-${index}`}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
                <p>Pick the service, confirm your location, and our expert team handles the rest.</p>
              </article>
            ))}
          </div>
        </div>
        <img className="how-vehicle" src={assets.howItWorks} alt="Technician beside serviced car" />
      </div>
    </section>
  );
}
