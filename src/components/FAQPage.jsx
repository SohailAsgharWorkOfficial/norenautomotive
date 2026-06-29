import React, { useMemo, useState } from 'react';
import {
  BatteryCharging,
  Car,
  Grid2X2,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { assets } from '../assets.js';

const categories = [
  { title: 'General Services', icon: Grid2X2 },
  { title: 'Booking & Doorstep Service', icon: MapPin },
  { title: 'Vehicle Maintenance', icon: Car },
  { title: 'Engine Performance & Diagnostics', icon: Stethoscope },
  { title: 'Battery, Tires & Safety', icon: BatteryCharging },
  { title: 'Quick Car Care Tips', icon: Sparkles },
];

const faqItems = [
  {
    question: 'What services does Noren Automotive provide?',
    answer: 'We provide doorstep oil changes, diagnostics, battery support, inspection, general maintenance, and quick repair assistance across Karachi.',
  },
  {
    question: 'What types of vehicles do you service?',
    answer: 'We service most passenger cars, SUVs, and light commercial vehicles.',
  },
  {
    question: 'How long does a typical service take?',
    answer: 'Most routine services take 45 to 90 minutes, depending on the service type, vehicle condition, and required inspection work.',
  },
  {
    question: 'Do you use professional equipment?',
    answer: 'Yes. Our technicians arrive with professional tools, diagnostic equipment, and quality service products for reliable doorstep care.',
  },
  {
    question: 'Why choose Noren Automotive?',
    answer: 'You save time, avoid workshop queues, get transparent pricing, and receive professional car care at your preferred location.',
  },
];

const faqData = [
  {
    title: 'General Services',
    icon: Grid2X2,
    faqs: [
      {
        question: 'What services does Noren Automotive provide?',
        answer:
          'We offer vehicle diagnostics, throttle body cleaning, catalytic converter cleaning, sensor cleaning, engine tuning, oil changes, car wash services, and general vehicle maintenance.',
      },
      {
        question: 'What types of vehicles do you service?',
        answer:
          'We service most passenger cars, SUVs, and light commercial vehicles.',
      },
      {
        question: 'Do you use professional equipment?',
        answer:
          'Yes. We use professional diagnostic tools and quality products to ensure accurate and reliable service.',
      },
      {
        question: 'Why choose Noren Automotive?',
        answer:
          'We focus on convenience, transparency, professional workmanship, and customer satisfaction while delivering quality automotive care at competitive prices.',
      },
    ],
  },
  {
    title: 'Booking & Doorstep Service',
    icon: MapPin,
    faqs: [
      {
        question: 'Do you provide doorstep service?',
        answer:
          'Yes. We provide convenient mobile automotive services at your home, office, or preferred location.',
      },
      {
        question: 'How do I book a service?',
        answer:
          'You can book a service by calling, WhatsApping, or submitting a booking request through our website.',
      },
      {
        question: 'How long does a typical service take?',
        answer:
          'Most services take between 30 minutes and 2 hours, depending on the work required and the condition of the vehicle.',
      },
    ],
  },
  {
    title: 'Vehicle Maintenance',
    icon: Car,
   faqs: [
      {
        question: 'What are the signs that my car needs an oil change?',
        answer:
          'Common signs include dark or dirty oil, increased engine noise, reduced fuel efficiency, an oil warning light, or reaching the recommended service interval.',
      },
      {
        question: 'How often should I check my engine oil?',
        answer:
          "It's recommended to check your engine oil at least once a month and before any long journey.",
      },
      {
        question: 'How often should I replace air filters?',
        answer:
          "Air filters should be inspected during every service and replaced according to the manufacturer's recommendations or when excessively dirty.",
      },
      {
        question: 'What is preventive maintenance?',
        answer:
          'Preventive maintenance involves servicing your vehicle before problems occur, helping reduce repair costs and avoid unexpected breakdowns.',
      },
      {
        question: 'How often should I wash my car?',
        answer:
          "Regular washing helps protect your vehicle's paint, remove harmful contaminants, and maintain its appearance and value.",
      },
      {
        question: 'Can regular servicing increase vehicle lifespan?',
        answer:
          'Yes. Consistent maintenance helps prevent major breakdowns, improves reliability, and extends the life of key vehicle components.',
      },
      {
        question: 'Why should I get my vehicle inspected before a long trip?',
        answer:
          'A pre-trip inspection helps identify potential issues with brakes, tires, fluids, battery, and other critical systems before you hit the road.',
      },
    ],
  },
  {
    title: 'Engine Performance & Diagnostics',
    icon: Stethoscope,
     faqs: [
      {
        question: 'Why is my fuel consumption increasing?',
        answer:
          'Increased fuel consumption may be caused by dirty air filters, low tire pressure, clogged injectors, dirty sensors, overdue maintenance, or aggressive driving habits.',
      },
      {
        question: 'What does the Check Engine Light mean?',
        answer:
          "The Check Engine Light indicates that your vehicle's computer has detected a fault. A diagnostic scan can identify the exact issue.",
      },
      {
        question: 'What is a throttle body and why should it be cleaned?',
        answer:
          'The throttle body controls the airflow entering your engine. Cleaning it can improve acceleration, idle quality, fuel efficiency, and overall performance.',
      },
      {
        question: 'Why is catalytic converter cleaning important?',
        answer:
          'A clean catalytic converter can improve exhaust flow, reduce emissions, and help maintain optimal engine performance.',
      },
      {
        question: 'What are oxygen sensors and what do they do?',
        answer:
          'Oxygen sensors monitor exhaust gases and help the engine maintain the correct air-fuel ratio for efficient operation.',
      },
      {
        question: 'Why is my engine idling roughly?',
        answer:
          'Rough idling can be caused by a dirty throttle body, faulty sensors, vacuum leaks, spark plug issues, or fuel system problems.',
      },
      {
        question: "How can I improve my car's fuel efficiency?",
        answer:
          'Regular maintenance, proper tire pressure, clean filters, smooth driving habits, and timely servicing can significantly improve fuel economy.',
      },
    ],
  },
  {
    title: 'Battery, Tires & Safety',
    icon: BatteryCharging,
    faqs: [
      {
        question: 'What causes battery failure?',
        answer:
          'Battery failure can result from age, extreme temperatures, charging system issues, corrosion, or leaving electrical accessories on for extended periods.',
      },
      {
        question: 'Why are tire pressures important?',
        answer:
          'Correct tire pressure improves safety, fuel economy, braking performance, handling, and tire lifespan.',
      },
    ],
  },
  {
  title: 'Quick Car Care Tips',
  icon: Sparkles,
  faqs: [
    {
      question: '🔧 How does a dirty throttle body affect my car?',
      answer:
        'A dirty throttle body can reduce engine performance and fuel efficiency.',
    },
    {
      question: '⛽ What happens if tire pressure is low?',
      answer:
        'Low tire pressure can increase fuel consumption and tire wear.',
    },
    {
      question: '🚗 Why are regular oil changes important?',
      answer:
        'Regular oil changes are one of the best ways to extend engine life.',
    },
    {
      question: '🔋 How long does a car battery usually last?',
      answer:
        'Most car batteries last between 3–5 years depending on usage and climate.',
    },
    {
      question: '⚙️ Why is preventive maintenance important?',
      answer:
        'Preventive maintenance is usually far less expensive than major repairs.',
    },
    {
      question: '✅ What are the benefits of regular servicing?',
      answer:
        'Regular servicing helps keep your vehicle safe, reliable, and efficient.',
    },
  ],
},
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(1);
  const [query, setQuery] = useState('');

  // बदलाव: benefits को कॉम्पोनेंट के अंदर ले आए ताकि assets का सही पाथ लोड हो सके
  const benefits = [
    { title: 'Certified Technicians', iconImg: assets.certifiedIcon },
    { title: 'Doorstep Convenience', iconImg: assets.doorstepIcon },
    { title: 'Transparent Pricing', iconImg: assets.pricingIcon },
  ];

  const visibleFaqs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const currentFaqs = faqData[activeCategory].faqs;

    if (!normalized) return currentFaqs;

    return currentFaqs.filter((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(normalized)
    );
  }, [query, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="faq-page" id="home">
        <section className="faq-page-hero">
          <div className="container faq-page-hero-copy">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about our doorstep automotive services, booking process,
              service packages, pricing, and vehicle maintenance. Everything you need to know before
              booking with Noren Automotive.
            </p>
          </div>
        </section>

        <section className="faq-page-main" id="faq">
          <div className="container faq-page-grid">
            <aside className="faq-sidebar" aria-label="FAQ categories">
              <h2>FAQ Categories</h2>
              <div className="faq-category-list">
                {faqData.map(({ title, icon: Icon }, index) => (
  <button
    className={activeCategory === index ? 'active' : ''}
    type="button"
    key={title}
    onClick={() => {
      setActiveCategory(index);
      setOpenIndex(0);
      setQuery('');
    }}
  >
    <Icon size={16} />
    <span>{title}</span>
  </button>
))}
              </div>
              <div className="faq-help-card">
                <span><Mail size={24} /></span>
                <strong>I still have a question?</strong>
                <p>Our support team is here to help you</p>
                <a href="/#contact">Contact Us</a>
              </div>
            </aside>

            <div className="faq-content">
              <label className="faq-search">
                <input
                  type="search"
                  placeholder="Search your question..."
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setOpenIndex(-1);
                  }}
                />
                <Search size={17} />
              </label>

              <div className="faq-page-list">
                {visibleFaqs.map((item, index) => {
                  const open = index === openIndex;
                  return (
                    <article className={`faq-page-item ${open ? 'open' : ''}`} key={item.question}>
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
                        <strong>{open ? 'x' : '+'}</strong>
                      </button>
                    </article>
                  );
                })}
                {visibleFaqs.length === 0 && (
                  <p className="faq-empty">No matching questions found. Contact us and we will help.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOOK YOUR SERVICE TODAY (PIXEL PERFECT GEOMETRIC INTERFACE) */}
        <section className="faq-service-cta" id="book">
          <div className="container faq-service-cta-inner layout-geometric-curve-wrapper">

            {/* Left Panel: Content Content Wrap */}
            <div className="faq-service-copy curved-content-shield">
              <h2>Book Your Service Today</h2>
              <p>
                Keep your vehicle running smoothly with professional automotive care delivered directly
                to your home, office, or preferred location. Fast, reliable, and hassle-free service
                whenever you need it.
              </p>

              {/* 3 Columns Benefits Matrix with direct SVG paths */}
              <div className="faq-benefits benefits-trio-grid">
                <div className="faq-benefit-item">
                  <svg className="faq-benefit-inline-icon" viewBox="0 0 64 64" aria-hidden="true">
                    <path d="M28 14a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" />
                    <path d="M5 44c1.4-9 7.4-14 14-14c3.4 0 6.4 1.1 8.8 3.2" />
                    <path d="M39 11l14 5v11c0 11-7.5 17.5-14 20c-6.5-2.5-14-9-14-20V16l14-5Z" />
                    <path d="M32 29l5 5l11-13" />
                    <path d="M17 43l-7 11" />
                    <path d="M25 43l7 11" />
                  </svg>
                  <strong>Certified Technicians</strong>
                </div>

                <div className="faq-benefit-item">
                  <svg className="faq-benefit-inline-icon" viewBox="0 0 64 64" aria-hidden="true">
                    <path d="M8 38V22h29v16" />
                    <path d="M37 28h9l8 10v8h-9" />
                    <path d="M8 46h8" />
                    <path d="M28 46h17" />
                    <path d="M21 51a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
                    <path d="M51 51a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
                    <path d="M44 16a6 6 0 1 1 12 0c0 5-6 10-6 10s-6-5-6-10Z" />
                    <path d="M50 16h.1" />
                  </svg>
                  <strong>Doorstep Convenience</strong>
                </div>

                <div className="faq-benefit-item">
                  <svg className="faq-benefit-inline-icon" viewBox="0 0 64 64" aria-hidden="true">
                    <path d="M18 10h28v46H18V10Z" />
                    <path d="M25 18h14" />
                    <path d="M25 27h14" />
                    <path d="M25 36h8" />
                    <path d="M41 44l5 5l10-13" />
                    <path d="M31 44c0 3-2 5-5 5s-5-2-5-5s2-5 5-5s5-2 5-5s-2-5-5-5s-5 2-5 5" />
                  </svg>
                  <strong>Transparent Pricing</strong>
                </div>
              </div>

              <a href="/#contact" className="contact-us-trigger-btn">Contact Us</a>
            </div>

            {/* Right Panel: Standalone PNG Transparent Cutout Overlay */}
            <div className="faq-service-visual-overlay">
              <img
                src="/assets/faq/faq-cta-visual.png"
                alt="Noren Automotive expert technician with sedan cutout visual"
                className="curved-section-cutout-img"
              />
            </div>

          </div>
        </section>

        <section className="faq-subscribe">
          <div className="container faq-subscribe-inner">
            <div>
              <Mail size={31} />
              <span>
                <strong>I still have a question?</strong>
                <small>Our support team is here to help you</small>
              </span>
            </div>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}