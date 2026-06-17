import React from 'react';

// इमेज के टेक्स्ट और इमेजेस के सटीक पाथ के अनुसार डेटा ऑब्जेक्ट्स
const vehicles = [
  {
    title: 'Hatchback',
    text: 'Efficient and practical city cars deserve expert care too. We offer convenient maintenance tailored to hatchbacks of all makes and models.',
    image: '/assets/vehicles/hatchback.png' // अपनी सही इमेज पाथ से बदलें
  },
  {
    title: 'Sedan',
    text: 'Comfortable, reliable, and built for everyday driving. We keep your sedan running smoothly with expert maintenance and care.',
    image: '/assets/vehicles/sedan.png' // अपनी सही इमेज पाथ से बदलें
  },
  {
    title: 'SUV',
    text: "Whether it's a compact crossover or a full-size SUV, our technicians provide the service your vehicle needs to perform at its best.",
    image: '/assets/vehicles/suv.png' // अपनी सही इमेज पाथ से बदलें
  }
];

export default function VehiclesSection() {
  return (
    <section className="vehicles">
      <div className="container">
        
        <div className="section-head centered">
          <h2>Vehicles We Service</h2>
          <p>From daily commuters to family vehicles, we provide professional doorstep servicing for a wide range of cars.</p>
        </div>
 
        <img className="vehicle-hero" src="/assets/placeholder-vehicles-service.png" alt="Noren Automotive team with serviced vehicles and mobile service van" />
        
        {/* नीचे वाले तीनों कार्ड्स */}
        <div className="vehicle-cards">
          {vehicles.map(({ title, text, image }) => (
            <article className="vehicle-card" key={title}>
              <img src={image} alt={`${title} vehicles`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}