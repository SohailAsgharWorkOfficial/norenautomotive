import React from 'react';
import { assets } from '../assets.js';

const careItems = [
  {
    title: 'Certified Technicians',
    text: 'Our skilled professionals are trained to handle a wide range of vehicle maintenance concerns, ensuring your car receives expert care every time.',
    iconKey: 'certifiedIcon',
  },
  {
    title: 'Convenient Doorstep Service',
    text: 'Wherever you are, our mobile service teams arrive fully equipped to complete efficient, reliable service without workshop delays.',
    iconKey: 'doorstepIcon',
  },
  {
    title: 'Transparent & Fair Pricing',
    text: 'Clear packages and upfront rates give you confidence before work begins, with no hidden surprises.',
    iconKey: 'pricingIcon',
  },
];

export default function CareSection() {
  return (
    <section className="care" id="about">
      <div className="container">
        <div className="section-head centered">
          <h2>Car Care Made Simple, Right at Your Doorstep</h2>
          <p>
            We bring professional car maintenance and servicing directly to your home or workplace.
          </p>
        </div>
        <div className="care-grid">
          <div className="care-photo-wrap">
            <img className="care-photo" src="/assets/placeholder-care-made-simple.png" alt="Noren technician with mobile service van" />
            <div className="photo-caption"><span></span> 100+ Cars Serviced<br />Expert Mobile Mechanic Team</div>
          </div>
          <div className="care-list">
            {careItems.map(({ title, text, iconKey }) => (
              <article className="care-item" key={title}>
             
                <span>
                  <div className="care-item-icon-wrap">
  <img 
    src={assets[iconKey]} 
    alt={title} 
    style={{ width: '60px', height: '60px', objectFit: 'contain', display: 'block' }} 
  />
</div>
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}