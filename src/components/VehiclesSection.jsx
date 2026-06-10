import React from 'react';

const vehicles = [
  ['Hatchback', 'Efficient and practical city cars serviced with careful model-specific maintenance.'],
  ['Sedan', 'Complete inspection and service support for comfortable everyday family cars.'],
  ['SUV', 'Robust service coverage for larger vehicles and performance-focused utility models.'],
];

export default function VehiclesSection() {
  return (
    <section className="vehicles">
      <div className="container">
        <div className="section-head centered">
          <h2>Vehicles We Service</h2>
          <p>Noren proudly accommodates family vehicles and provides professional doorstep servicing for a wide range of cars.</p>
        </div>
        <img className="vehicle-hero" src="/assets/placeholder-vehicles-service.png" alt="Noren team with serviced vehicles" />
        <div className="vehicle-cards">
          {vehicles.map(([title, text]) => (
            <article className="vehicle-card" key={title}>
              <img src="/assets/placeholder-team-card.png" alt={`${title} service placeholder`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
