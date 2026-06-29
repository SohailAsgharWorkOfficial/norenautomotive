import React, { useState } from 'react';
import {
  Activity,
  Award,
  CheckCircle2,
  MapPin,
  Plus,
  X,
} from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const contactFaqs = [
  {
    question: 'What services does Noren Automotive offer?',
    answer:
      'We offer vehicle diagnostics, throttle body cleaning, catalytic converter cleaning, sensor cleaning, engine tuning, oil changes, car wash services, and general vehicle maintenance.',
  },
  {
    question: 'How can I book a service?',
    answer:
      'Booking is simple. You can contact us by phone, WhatsApp, or submit a service request through our website, and our team will arrange a convenient appointment.',
  },
  {
    question: 'How often should I service my vehicle?',
    answer:
      'Most vehicles should be serviced every 5,000 to 10,000 kilometers, depending on usage, oil type, and manufacturer recommendations.',
  },
  {
    question: 'What are common signs that my vehicle needs attention?',
    answer:
      'Warning lights, rough idling, unusual sounds, reduced fuel efficiency, smoke, weak battery performance, or poor acceleration can indicate that your vehicle needs inspection.',
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-overlay">
            <div className="container contact-hero-copy">
              <h1>
                Get a Mechanic at Your Doorstep
                <br />
                Anytime You Need
              </h1>
              {/* <span>MOBILE CAR SERVICE</span> */}
              <p>
                Book trusted car service in minutes. Our certified mechanics come to your
                location, so you don’t waste time in garages or waiting lines.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-main-section">
          <div className="container">
            <div className="contact-section-head">
              <h2>We’re Here When Your Car Needs Us</h2>
              <p>
                Reach out instantly via call, email, or visit us online. Fast responses,
                real support, no delays — just reliable car service at your convenience.
              </p>
            </div>

            <div className="contact-content-grid">
              <form className="contact-request-card">
                <h3>Tell Us What Your Car Needs</h3>
                <p>Get professional car care at your doorstep.</p>

                <label>
                  <span>Full Name</span>
                  <input type="text" placeholder="Enter Your Full Name" />
                </label>

                <label>
                  <span>Vehicle Model</span>
                  <input type="text" placeholder="Enter Your Full Name" />
                </label>

                <label>
                  <span>Phone No.</span>
                  <div className="contact-phone-field">
                    <em>+92</em>
                    <input type="tel" placeholder="000-0000000" />
                  </div>
                </label>

                <label>
                  <span>Select Service</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option>Oil Change</option>
                    <option>Battery Service</option>
                    <option>Brake Service</option>
                    <option>AC Service</option>
                    <option>Vehicle Diagnostics</option>
                    <option>General Maintenance</option>
                  </select>
                </label>

                <label>
                  <span>Location</span>
                  <input type="text" placeholder="Enter Your Location" />
                </label>

                <button type="button">Send Request</button>
              </form>

              <div className="contact-map-side">
                <div className="contact-map-box">
                  <div className="contact-map-card">
                    <h3>Serving Major Areas Across Karachi</h3>
                    <p>
                      Our mobile automotive team proudly provides professional doorstep car care
                      across Karachi. Whether you’re at home, the office, or your workplace,
                      our technicians are ready to deliver reliable service directly to your location.
                    </p>
                    <a href="#book">Book a Service</a>
                  </div>
                </div>

                <div className="contact-feature-row">
                  <div>
                    <Activity size={44} />
                    <strong>Professional</strong>
                    <span>Diagnostics</span>
                  </div>

                  <div>
                    <Award size={44} />
                    <strong>15 Days</strong>
                    <span>Workmanship Guarantee</span>
                  </div>

                  <div>
                    <CheckCircle2 size={44} />
                    <strong>Transparent</strong>
                    <span>Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-faq-section">
          <div className="container contact-faq-inner">
            <h2>Frequently Asked Questions</h2>

            <div className="contact-faq-list">
              {contactFaqs.map((item, index) => {
                const open = openIndex === index;

                return (
                  <article className={`contact-faq-item ${open ? 'open' : ''}`} key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : index)}
                      aria-expanded={open}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>

                      <div>
                        <h3>{item.question}</h3>
                        {open && <p>{item.answer}</p>}
                      </div>

                      <strong>
                        {open ? <X size={17} /> : <Plus size={17} />}
                      </strong>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}