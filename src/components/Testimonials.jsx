import React from 'react';
import { assets } from '../assets.js';

const testimonials = [
  ['Super smooth experience overall. Booking was quick, the mechanic arrived right on schedule, and the oil change was done efficiently without any hassle. Definitely a service I’d use again.', 'Hassan Raza', 0],
  ['Very convenient and affordable. I booked online, and the team handled everything at my office parking lot. Highly recommended.', 'Muhammad Ali', 1],
  ['Excellent service! The technician arrived on time, changed my oil, and completed everything professionally. Saved me a trip to the workshop.', 'Ahmed Khan', 2],
  ['Great experience from start to finish. Transparent pricing, friendly staff, and quality workmanship.', 'Usman Shah', 3],
  ['Really impressed with how professional everything was. The team was punctual, explained the process clearly, and completed the service right at my workplace. Great value for money.', 'Shahid Khan', 4],
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
