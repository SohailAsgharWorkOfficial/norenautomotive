import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services does Noren Automotive offer?',
    answer:
      'We provide doorstep oil changes, diagnostics, battery support, general servicing, and vehicle inspection services.',
  },
  {
    question: 'How can I book a service?',
    answer:
      'Booking is simple. You can contact us by phone, WhatsApp, or submit a service request through our website, and our team will arrange a convenient appointment.',
  },
  {
    question: 'How often should I service my vehicle?',
    answer:
      'Most vehicles should be serviced every 5,000 to 10,000 km, depending on driving conditions and manufacturer guidance.',
  },
  {
    question: 'What are common signs that my vehicle needs attention?',
    answer:
      'Warning lights, strange noises, reduced performance, fluid leaks, or vibration are all signs you should book a service.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="faq" id="faq">
      <div className="container narrow">
        <div className="section-head centered">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const open = index === openIndex;
            return (
              <article className={`faq-item ${open ? 'open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.question}</h3>
                    {open && <p>{item.answer}</p>}
                  </div>
                  <strong>{open ? '-' : '+'}</strong>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
