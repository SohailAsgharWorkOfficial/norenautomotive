import React from 'react';
import { assets } from '../assets.js';

const steps = [
  {
    title: 'Book Your Service',
    description: 'Choose your required service and schedule a convenient appointment with our team.'
  },
  {
    title: 'We Come To You',
    description: 'Our technician arrives on-site fully equipped to perform the requested service.'
  },
  {
    title: 'Drive With Confidence',
    description: 'We complete the job professionally and ensure your vehicle is road-ready.'
  }
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container how-wrap">
        <div className="how-panel">
          <h2>How It Works</h2>
          <p>Getting your car serviced has never been easier.</p>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={index}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
        <img className="how-vehicle" src={assets.howItWorks} alt="Technician beside serviced car" />
      </div>
    </section>
  );
}