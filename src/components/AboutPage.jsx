import React from 'react';
import { ShieldCheck, Award, MapPin, Users, Check, X } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BookingForm from './BookingForm.jsx';

// Principles Grid Data
const principles = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'To deliver honest recommendations and transparent communication.',
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

        {/* 1. HERO SECTION */}
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

        {/* 2. OUR STORY SECTION */}
        {/* 2. OUR STORY SECTION (MOCKUP PIXEL-PERFECT MATCH) */}
        <section className="about-story" id="about">
          <div className="container about-story-grid">

            {/* Left Block: Image Container with Floating Blue Feature Counter */}
            <div className="about-story-photo-wrapper">
              <div className="about-story-photo">
                <img
                  src="/assets/about/about-story.png"
                  alt="Noren Automotive mobile technician with service vehicle"
                />

                {/* Floating Feature Strip Matching image_8b4803.jpg Layout */}
                <div className="photo-floating-counter-strip">
                  <div className="counter-notification-badge">
                    {/* Custom high-contrast status bell wrapper */}
                    <span className="badge-pulse-dot"></span>
                  </div>
                  <div className="counter-strip-copy">
                    <h4>500+ Cars Serviced</h4>
                    <p>Expert Service, Wherever You Need It</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block: Content Text Controls */}
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
              <a href="#book" className="book-service-btn-accent">Book Your Service Today</a>
            </div>

          </div>
        </section>

        {/* 3. CORE PRINCIPLES SECTION (CUSTOM SVG ASSETS PATHS INTEGRATION) */}
        <section className="about-principles">
          <div className="container">
            <h2 className="principles-main-title">The Principles That Drive Everything We Do</h2>

            <div className="about-principle-grid blueprint-aligned-row">
              {/* 1. Integrity */}
              <article className="about-principle segment-pillar">
                <div className="pillar-icon-wrapper">
                  <img
                    src="/assets/about/integrity.svg"
                    alt="Integrity shield icon"
                    className="trust-svg-node"
                  />
                </div>
                <div className="pillar-text-group">
                  <h3>Integrity</h3>
                  <p>Honest recommendations and transparent communication.</p>
                </div>
              </article>

              {/* 2. Quality */}
              <article className="about-principle segment-pillar">
                <div className="pillar-icon-wrapper">
                  <img
                    src="/assets/about/quality.svg"
                    alt="Quality ribbon badge icon"
                    className="trust-svg-node"
                  />
                </div>
                <div className="pillar-text-group">
                  <h3>Quality</h3>
                  <p>Using proven techniques and trusted products.</p>
                </div>
              </article>

              {/* 3. Convenience */}
              <article className="about-principle segment-pillar">
                <div className="pillar-icon-wrapper">
                  <img
                    src="/assets/about/convenience.svg"
                    alt="Convenience map pin clock icon"
                    className="trust-svg-node"
                  />
                </div>
                <div className="pillar-text-group">
                  <h3>Convenience</h3>
                  <p>Delivering workshop-quality service wherever you are.</p>
                </div>
              </article>

              {/* 4. Customer First */}
              <article className="about-principle segment-pillar">
                <div className="pillar-icon-wrapper">
                  <img
                    src="/assets/about/customer-first.svg"
                    alt="Customer first heart users icon"
                    className="trust-svg-node"
                  />
                </div>
                <div className="pillar-text-group">
                  <h3>Customer First</h3>
                  <p>Every decision starts with customer satisfaction.</p>
                </div>
              </article>
            </div>

          </div>
        </section>

        {/* 4. THE TEAM SECTION */}
        <section className="about-team">
          <div className="container">
            <div className="about-section-head">
              <h2>The People Behind Noren Automotive</h2>
              <p>
                At Noren Automotive, our team combines technical expertise with a commitment to exceptional customer service. Every technician is trained to diagnose issues accurately, recommend practical solutions, and deliver professional results.
              </p>
            </div>
            <img
              src="/assets/about/about-team.png"
              alt="Noren Automotive technicians and service vehicles team setup"
            />
          </div>
        </section>

        {/* 5. WHAT MAKES US DIFFERENT (UNIFIED BG PASS WITH SLANTED TEXT OVERLAYS) */}
        <section className="about-difference">
          <div className="container">
            <div className="about-section-head centered">
              <h2>What Makes Us Different</h2>
              <p>
                Traditional vehicle servicing often means driving through traffic, waiting in long queues,
                and spending valuable time at a workshop. At Noren Automotive, we bring professional car care
                directly to your doorstep—saving you time while delivering the same high-quality service your vehicle deserves.
              </p>
            </div>

            {/* Continuous image wrap handles single background logic perfectly */}
            <div className="about-difference-card unified-comparison-panel-frame" style={{ backgroundImage: "url('/assets/about/comparison-combined-banner.png')" }}>

              {/* Left Text Box Block: Soft gradient tint container over traditional engine bay view */}
              <div className="side-overlay-container traditional-matte-tint">
                <div className="overlay-content-wrapper">
                  <h3 className="comparison-headline text-red">Traditional Workshop</h3>
                  <ul className="comparison-bullet-matrix">
                    <li><X size={14} className="badge-icon-red" /> <span>You drive to the workshop</span></li>
                    <li><X size={14} className="badge-icon-red" /> <span>Long waiting time</span></li>
                    <li><X size={14} className="badge-icon-red" /> <span>Unclear or hidden pricing</span></li>
                    <li><X size={14} className="badge-icon-red" /> <span>Time-consuming processes</span></li>
                    <li><X size={14} className="badge-icon-red" /> <span>Limited Convenience</span></li>
                  </ul>
                </div>
              </div>

              {/* Central viewport area remains dynamic & clear to display baseline workshop car rendering paths */}
              <div className="transparent-image-viewport-center"></div>

              {/* Right Text Box Block: Strict Slanted dark royal background container matching mockup layout */}
              <div className="side-overlay-container noren-slanted-blue-block">
                <div className="overlay-content-wrapper padding-left-slant">
                  <h3 className="comparison-headline text-white">Noren Automotive</h3>
                  <ul className="comparison-bullet-matrix">
                    <li><Check size={14} className="badge-icon-white" /> <span>We come to your location</span></li>
                    <li><Check size={14} className="badge-icon-white" /> <span>No waiting, we save your time</span></li>
                    <li><Check size={14} className="badge-icon-white" /> <span>Transparent and upfront pricing</span></li>
                    <li><Check size={14} className="badge-icon-white" /> <span>Quick and Efficient Service</span></li>
                    <li><Check size={14} className="badge-icon-white" /> <span>Complete Door Step Convenience</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. SERVICE MAP & BOOKING INTEGRATION */}
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
              {/* Compact booking engine injection matching layout frame */}
              <BookingForm compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}