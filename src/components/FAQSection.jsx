import React from 'react';

const faqs = [
  ['What services does Noren Automotive offer?', ''],
  ['How can I book a service?', 'Booking is simple. You can contact us by phone, WhatsApp, or submit a service request through our website, and our team will arrange a convenient appointment.'],
  ['How often should I service my vehicle?', ''],
  ['What are common signs that my vehicle needs attention?', ''],
];

export default function FAQSection() {
  return (
    <section className="faq" id="faq">
      <div className="container narrow">
        <div className="section-head centered">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${answer ? 'open' : ''}`} key={question}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{question}</h3>
                {answer && <p>{answer}</p>}
              </div>
              <strong>+</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
