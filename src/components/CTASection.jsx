import React from 'react';
import BookingForm from './BookingForm.jsx';

export default function CTASection() {
  return (
    <section className="cta" id="book">
      <div className="container cta-grid">
        <div className="cta-copy">
          <h2>Book Your Service Today & Drive With Confidence</h2>
          <p>
            From routine maintenance to quick repairs, our certified technicians are just a booking
            away. Fast, convenient, and backed by car owners across the city.
          </p>
        </div>
        <BookingForm compact />
      </div>
    </section>
  );
}
