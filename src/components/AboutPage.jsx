import React from 'react';
import { Award, MapPin, ShieldCheck, Users } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BookingForm from './BookingForm.jsx';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'Honest recommendations and transparent communication.',
  },
  {
    icon: Award,
    title: 'Quality',
    text: 'Using proven techniques and trusted products.',
  },
  {
    icon: MapPin,
    title: 'Convenience',
    text: 'Delivering workshop-quality service wherever you are.',
  },
  {
    icon: Users,
    title: 'Customer First',
    text: 'Every decision starts with customer satisfaction.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page" id="home">
        <section className="about-hero">
          <div className="container about-hero-copy">
            <h1>Driven by Trust. Powered by Convenience.</h1>
            <p>
              Noren Automotive brings professional car care directly to your doorstep. From routine
              maintenance to expert diagnostics, we make vehicle servicing simple, transparent, and
              hassle-free.
            </p>
          </div>
        </section>

        <section className="about-story" id="about">
          <div className="container about-story-grid">
            <div className="about-story-photo">
              <img src="/assets/about/about-story.png" alt="Noren Automotive mobile technician with service vehicle" />
            </div>
            <div className="about-story-copy">
              <h2>Car Care Without the Workshop Hassle</h2>
              <p>
                Noren Automotive was founded with a simple goal: make professional automotive services
                more convenient for car owners across Karachi.
              </p>
              <p>
                We noticed that vehicle owners often spend hours driving to workshops, waiting in queues,
                and dealing with unclear pricing. Our solution was simple: bring certified automotive
                services directly to customers' homes, offices, and preferred locations.
              </p>
              <p>
                Today, we continue helping vehicle owners save time while ensuring their cars receive
                reliable, high-quality care.
              </p>
              <strong>Ready to Experience Hassle-Free Car Care?</strong>
              <a href="#book">Book Your Service Today</a>
            </div>
          </div>
        </section>

        <section className="about-principles">
          <div className="container">
            <h2>The Principles That Drive Everything We Do</h2>
            <div className="about-principle-grid">
              {principles.map(({ icon: Icon, title, text }) => (
                <article className="about-principle" key={title}>
                  <Icon size={40} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="container">
            <div className="about-section-head">
              <h2>The People Behind Noren Automotive</h2>
              <p>
                At Noren Automotive, our team combines technical expertise with a commitment to exceptional
                customer service. Every technician is trained to diagnose issues accurately, recommend
                practical solutions, and deliver professional results.
              </p>
            </div>
            <img src="/assets/about/about-team.png" alt="Noren Automotive technicians and service vehicles" />
          </div>
        </section>

        <section className="about-difference">
          <div className="container">
            <div className="about-section-head">
              <h2>What Makes Us Different</h2>
              <p>
                Traditional vehicle servicing often means driving through traffic, waiting in long queues,
                and spending valuable time at a workshop. At Noren Automotive, we bring professional car care
                directly to your doorstep.
              </p>
            </div>
            <div className="about-difference-card">
              <img src="/assets/about/about-different.png" alt="Traditional workshop compared with Noren Automotive doorstep service" />
            </div>
          </div>
        </section>

        <section className="services-map about-map" id="book">
          <div className="services-map-overlay">
            <div className="container services-map-grid">
              <div className="services-map-copy">
                <h2>Serving Major Areas Across Karachi</h2>
                <p>
                  Our mobile automotive team proudly provides professional doorstep car care across Karachi.
                  Whether you are at home, the office, or your workplace, our technicians are ready to
                  deliver reliable service directly to your location.
                </p>
              </div>
              <BookingForm compact />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
