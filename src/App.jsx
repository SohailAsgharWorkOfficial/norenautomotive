import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import BrandStrip from './components/BrandStrip.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import FuelSupplySection from './components/FuelSupplySection.jsx';
import PackagesSection from './components/PackagesSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CareSection from './components/CareSection.jsx';
import VehiclesSection from './components/VehiclesSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTASection from './components/CTASection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import PackagesPage from './components/PackagesPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import FAQPage from './components/FAQPage.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  const path = window.location.pathname;
  const isServicesPage = path === '/services';
  const isPackagesPage = path === '/packages';
  const isAboutPage = path === '/about';
  const isFAQPage = path === '/faq';

  if (isServicesPage) {
    return (
      <>
        <ServicesPage />
        <WhatsAppFloat />
      </>
    );
  }

  if (isPackagesPage) {
    return (
      <>
        <PackagesPage />
        <WhatsAppFloat />
      </>
    );
  }

  if (isAboutPage) {
    return (
      <>
        <AboutPage />
        <WhatsAppFloat />
      </>
    );
  }

  if (isFAQPage) {
    return (
      <>
        <FAQPage />
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandStrip />
        <ServicesSection />
        <FuelSupplySection />
        <PackagesSection />
        <HowItWorks />
        <CareSection />
        <VehiclesSection />
        <Testimonials />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
