import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import BrandStrip from './components/BrandStrip.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import PackagesSection from './components/PackagesSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CareSection from './components/CareSection.jsx';
import VehiclesSection from './components/VehiclesSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTASection from './components/CTASection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
import ServicesPage from './components/ServicesPage.jsx';

export default function App() {
  const isServicesPage = window.location.pathname === '/services';

  if (isServicesPage) {
    return <ServicesPage />;
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandStrip />
        <ServicesSection />
        <PackagesSection />
        <HowItWorks />
        <CareSection />
        <VehiclesSection />
        <Testimonials />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
