import React from 'react';

const testimonials = [
  ['Great team and excellent service. I booked at home, and the mechanic arrived right on time.', 'Ali Khan'],
  ['Excellent service! The technicians arrived on time, changed my oil, and completed everything professionally.', 'Muhammad Zain'],
  ['Noren automotive made service convenient and stress free. Highly recommended.', 'Usman Shah'],
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Trusted by car owners who value convenience, reliability, and professional service.</h2>
        <div className="testimonial-row">
          {testimonials.map(([quote, name], index) => (
            <article className="testimonial-card" key={name}>
              <div className="avatar">{name.charAt(0)}</div>
              <p>{quote}</p>
              <strong>{name}</strong>
              <small>Verified Customer</small>
            </article>
          ))}
        </div>
        <a href="#reviews" className="review-btn">View More Reviews</a>
      </div>
    </section>
  );
}
