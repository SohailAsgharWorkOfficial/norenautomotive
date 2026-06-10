import React from 'react';
import { assets } from '../assets.js';

const testimonials = [
  ['Convenient and affordable. I booked online, and the team handled everything at my office parking lot. Highly recommended.', 'Ali Khan', 0],
  ['Excellent service! The technician arrived on time, changed my oil, and completed everything professionally. Saved me a trip to the workshop.', 'Ahmed Khan', 1],
  ['Great experience from start to finish. The staff were polite, and the quality workmanship.', 'Usman Shah', 2],
];

export default function Testimonials() {
  const loopingTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonials">
      <div className="testimonial-shell">
        <h2>Trusted by car owners who value convenience, reliability, and professional service.</h2>
        <div className="testimonial-viewport">
          <div className="testimonial-row marquee-left" aria-hidden="true">
            {loopingTestimonials.map(([quote, name, avatarIndex], index) => (
              <article className="testimonial-card" key={`left-${name}-${index}`}>
                <img className="testimonial-avatar" src={assets.testimonialAvatars[avatarIndex]} alt="" />
                <div className="testimonial-copy">
                  <p>{quote}</p>
                  <strong>{name}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
        <a href="#reviews" className="review-btn">View More Reviews</a>
      </div>
    </section>
  );
}
