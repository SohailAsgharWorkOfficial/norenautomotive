import React, { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, CircleDot, MapPin, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const packageOptions = [
  {
    id: 'standard',
    title: 'Standard Package',
    badge: 'Most popular',
    tone: 'blue',
    description: 'Essential car care service to keep your vehicle running smoothly',
    features: [
      'Throttle Body Cleaning',
      'Fuel System Cleaning',
      'Spark Plug & Coil Service',
      'Air & AC Filter Cleaning',
      'Computer Diagnostics',
      'Brake & AC Inspection',
    ],
  },
  {
    id: 'premium',
    title: 'Premium Plus Package',
    badge: 'Recommended',
    tone: 'red',
    description: 'Advanced care with premium service for optimal performance',
    features: [
      'All Standard Package Services',
      'Advanced Injector Cleaning',
      'MAF Sensor Cleaning',
      'Deep Throttle Service',
      'Engine Performance Optimization',
      'ECU Calibration',
    ],
  },
];

const capacityOptions = [
  ['600cc - 1000cc', 4950, 6950],
  ['1000cc - 1500cc', 5450, 7450],
  ['1500cc - 2000cc', 6450, 8450],
  ['2000cc - 2500cc', 7450, 9450],
  ['2500cc+', 8450, 10450],
];

const addOns = [
  { 
    id: 'carwash', 
    label: 'Car Wash', 
    description: 'Exterior wash for a clean and refreshed finish.', 
    price: 1800, 
    type: 'fixed',
    iconPath: '/assets/services/car-wash.svg'
  },
  { 
    id: 'detailing', 
    label: 'Interior Detailing', 
    description: 'Deep cleaning of dashboard, seats, carpets, and interior surfaces.', 
    price: 9000, 
    type: 'fixed',
    iconPath: '/assets/services/interior-detailing.svg'
  },
  { 
    id: 'brake', 
    label: 'Brake Service', 
    description: 'Brake inspection, cleaning, and adjustment service.', 
    price: 5000, 
    type: 'fixed',
    iconPath: '/assets/services/brake-service.svg'
  },
  { 
    id: 'acgas', 
    label: 'AC Gas Charging', 
    description: 'AC gas refill according to vehicle requirements.', 
    price: 0, 
    type: 'variable', 
    textPrice: 'As per gas type and volume',
    iconPath: '/assets/services/ac-gas.svg'
  },
];

const trustItems = [
  {
    title: 'Genuine Products',
    text: 'Only authentic products sourced from trusted suppliers.',
    iconPath: '/assets/services/genuine-products.svg'
  },
  {
    title: 'Trusted Brands',
    text: 'Recognized brands known for quality and reliability.',
    iconPath: '/assets/services/trusted-brands-icon.svg'
  },
  {
    title: 'Better Vehicle Performance',
    text: 'Quality components help your vehicle perform at its best.',
    iconPath: '/assets/services/vehicle-performance.svg'
  },
];

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [selectedCapacity, setSelectedCapacity] = useState(capacityOptions[0][0]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    address: '',
    notes: '',
  });

  const selectedPackageData = packageOptions.find((item) => item.id === selectedPackage);
  const selectedCapacityRow = capacityOptions.find(([label]) => label === selectedCapacity);
  const packageBase = selectedCapacityRow?.[selectedPackage === 'standard' ? 1 : 2] ?? 0;
  
  const addOnTotal = selectedAddOns.reduce((sum, id) => {
    const addon = addOns.find((item) => item.id === id);
    return sum + (addon?.price ?? 0);
  }, 0);
  
  const totalPrice = packageBase + addOnTotal;
  
  const addOnLabels = selectedAddOns
    .map((id) => addOns.find((item) => item.id === id)?.label)
    .filter(Boolean);

  const toggleAddOn = (id) => {
    setSelectedAddOns((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const summaryRows = useMemo(
    () => [
      ['Package', selectedPackageData.title],
      ['Engine capacity', selectedCapacity],
      ['Add-ons', addOnLabels.length ? `${addOnLabels.length} selected` : '0 selected'],
    ],
    [addOnLabels.length, selectedCapacity, selectedPackageData.title]
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!form.fullName || !form.phone || !form.date) {
      alert("Please fill in all required fields (*)");
      return;
    }

    setIsSending(true);

    const templateParams = {
      fullName: form.fullName,
      phone: form.phone,
      email: form.email || 'Not Provided',
      date: form.date,
      address: form.address || 'Not Provided',
      notes: form.notes || 'None',
      selectedPackage: selectedPackageData.title,
      selectedCapacity: selectedCapacity,
      selectedAddOns: addOnLabels.length > 0 ? addOnLabels.join(', ') : 'None Selected',
      totalPrice: totalPrice.toLocaleString()
    };

    emailjs.send(
      'service_5zohn2l',
      'template_cnqmyzq', 
      templateParams,
      'cNvwtejgQVDcKq5Ur'
    )
    .then(() => {
      setShowSuccessModal(true);
      setSelectedAddOns([]);
      setForm({
        fullName: '',
        phone: '',
        email: '',
        date: '',
        address: '',
        notes: '',
      });
    })
    .catch((err) => {
      console.error('Submission Failed:', err);
      alert("Something went wrong. Please check your network or try again.");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  const SuccessOverlay = () => (
    <div className="booking-success-overlay fixed-modal">
      <div className="booking-success-card">
        <div className="success-icon-badge">✓</div>
        <h3>Package Booked Successfully!</h3>
        <p>Your vehicle maintenance request has been submitted. Our team will contact you shortly to confirm your slot.</p>
        <button type="button" onClick={() => setShowSuccessModal(false)}>Close</button>
      </div>
    </div>
  );

  // Full Screen Blur Loader Screen
  const FullScreenLoader = () => (
    <div className="booking-loading-overlay fixed-modal">
      <div className="booking-loading-card">
        <div className="booking-spinner"></div>
        <p className="loading-text-main">Submitting Your Details</p>
        <p className="loading-text-sub">Please wait while we secure your doorstep booking slot...</p>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="packages-page" id="top">
        <section className="packages-hero" aria-label="Premium car care packages">
          <div className="container services-hero-inner">
            <h1>Premium Car Care Packages at Your Doorstep</h1>
            <p>
              Choose the perfect maintenance package for your vehicle. From diagnostics and cleaning to
              performance optimization, our expert technicians bring professional car care directly to your
              location anywhere in Karachi.
            </p>
            <div className="services-hero-actions">
              <a href="#packages" className="services-primary-btn">Book a Service</a>
              <a href="#packages" className="services-outline-btn">Get a Free Quote</a>
            </div>
          </div>
        </section>

        <section className="packages-intro">
          <div className="container">
            <div className="services-page-head">
              <h2>Professional Automotive Services</h2>
              <p>
                Keep your vehicle performing at its best with expert doorstep maintenance, diagnostics,
                and repair services. Our certified technicians bring professional automotive care directly
                to your home, office, or preferred location, saving you time while ensuring quality
                workmanship and reliable results.
              </p>
            </div>
            <div className="packages-stats">
              <div><ShieldCheck size={22} /><div><strong>15 Days</strong><span>Workmanship Guarantee</span></div></div>
              <div><Sparkles size={22} /><div><strong>Professional</strong><span>Diagnostics</span></div></div>
              <div><Wrench size={22} /><div><strong>Transparent</strong><span>Pricing</span></div></div>
              <div><MapPin size={22} /><div><strong>Karachi</strong><span>only</span></div></div>
            </div>
          </div>
        </section>

        <section className="packages-builder" id="packages">
          <form onSubmit={handleFormSubmit} className="container packages-panel">
            <div className="packages-step">
              <span>1</span>
              <h3>Choose your package</h3>
            </div>
            <div className="packages-choice-grid">
              {packageOptions.map((pkg) => {
                const active = selectedPackage === pkg.id;
                return (
                  <button
                    type="button"
                    key={pkg.id}
                    className={`packages-choice-card ${pkg.tone} ${active ? 'active' : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <div className="packages-choice-head">
                      <div>
                        <h4>{pkg.title}</h4>
                        <p>{pkg.description}</p>
                      </div>
                      <span>{pkg.badge}</span>
                    </div>
                    <ul>
                      {pkg.features.map((feature) => (
                        <li key={feature}>
                          <Check size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <CircleDot size={18} className="packages-radio" />
                  </button>
                );
              })}
            </div>

            <div className="packages-step">
              <span>2</span>
              <h3>Customize your service</h3>
            </div>
            <div className="packages-custom-grid">
              <div className="packages-capacity">
                <div className="packages-label">Select your engine capacity</div>
                <div className="packages-pills">
                  {capacityOptions.map(([label]) => (
                    <button
                      key={label}
                      type="button"
                      className={selectedCapacity === label ? 'active' : ''}
                      onClick={() => setSelectedCapacity(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <aside className="packages-price-box">
                <span>Package Price</span>
                <strong>PKR {totalPrice.toLocaleString()}</strong>
              </aside>
            </div>

            <div className="packages-addon-title">Add-on services (optional)</div>
            
            <div className="packages-addon-list">
              {addOns.map((addon) => {
                const isChecked = selectedAddOns.includes(addon.id);
                return (
                  <label key={addon.id} className={`packages-addon-row ${isChecked ? 'checked' : ''}`}>
                    <div className="packages-addon-copy">
                      <div className="addon-icon-container">
                        <img 
                          src={addon.iconPath} 
                          alt={addon.label} 
                          className="addon-svg-img" 
                        />
                      </div>
                      <div>
                        <strong className="addon-main-label">{addon.label}</strong>
                        <span className="addon-desc-label">{addon.description}</span>
                      </div>
                    </div>
                    <div className="packages-addon-interactive">
                      <span className="addon-price-tag">
                        {addon.type === 'variable' ? addon.textPrice : `PKR ${addon.price.toLocaleString()}`}
                      </span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddOn(addon.id)}
                      />
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="packages-step">
              <span>3</span>
              <h3>Your details</h3>
            </div>
            <div className="packages-form-grid">
              <label>
                <span>Full Name *</span>
                <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Enter your full name" />
              </label>
              <label>
                <span>Phone Number *</span>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03xx - xxxxxxx" />
              </label>
              <label>
                <span>Email Address (optional)</span>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Enter your email" />
              </label>
              <label>
                <span>Select Date *</span>
                <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </label>
              <label className="span-2">
                <span>Enter Your Address</span>
                <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Enter your address" />
              </label>
              <label className="span-3">
                <span>Additional Notes (Optional)</span>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any specific instruction or vehicle issues" rows={3} />
              </label>
            </div>

            <div className="packages-summary">
              <h3>Package Summary</h3>
              <div className="packages-summary-grid">
                {summaryRows.map(([label, value]) => (
                  <div key={label} className="packages-summary-row">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
                <div className="packages-summary-total">
                  <span>Total price</span>
                  <strong>PKR {totalPrice.toLocaleString()}</strong>
                </div>
              </div>
              <button type="submit" className="packages-submit" disabled={isSending}>
                {isSending ? 'Please wait...' : 'Book Now'}
              </button>
            </div>
          </form>
        </section>

        {isSending && <FullScreenLoader />}
        {showSuccessModal && <SuccessOverlay />}

        <section className="trusted-brands">
          <div className="container">
            <div className="services-page-head">
              <h2>Powered By Pakistan's Most Trusted Automotive Brands</h2>
              <p>
                We use genuine oils, filters, batteries, and replacement parts from industry-leading brands
                to deliver reliable performance, maximum protection, and complete peace of mind.
              </p>
            </div>
            <div className="trusted-grid">
              <div className="trusted-photo-wrap">
                <img src="/assets/services/trusted-brands.png" alt="Trusted oils, batteries, filters and brake parts" />
              </div>
              <div className="trusted-copy">
                <h2>Quality you can trust</h2>
                <div className="trust-list">
                  {trustItems.map((item) => (
                    <div className="trust-item" key={item.title}>
                      <span className="trust-icon-wrap">
                        <img 
                          src={item.iconPath} 
                          alt={item.title} 
                          className="trust-svg-img" 
                        />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}