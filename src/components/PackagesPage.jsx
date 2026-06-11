import React, { useMemo, useState } from 'react';
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
  { id: 'guarantee', label: '15 Days Workmanship Guarantee', price: 0 },
  { id: 'scan', label: 'Advanced ECU Scan', price: 750 },
  { id: 'cleaning', label: 'Fuel Injector Cleaning Add-on', price: 1200 },
  { id: 'inspection', label: 'Full Suspension Inspection', price: 500 },
  { id: 'flushing', label: 'Brake Fluid Flushing', price: 900 },
];

const trustItems = [
  ['Genuine Products', 'Only authentic products sourced from trusted suppliers.'],
  ['Trusted Brands', 'Recognized brands known for quality and reliability.'],
  ['Better Vehicle Performance', 'Quality components help your vehicle perform at its best.'],
];

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [selectedCapacity, setSelectedCapacity] = useState(capacityOptions[0][0]);
  const [selectedAddOns, setSelectedAddOns] = useState(['guarantee']);
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
    .filter((id) => id !== 'guarantee')
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
              <a href="#packages-book" className="services-primary-btn">Book a Service</a>
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
          <div className="container packages-panel">
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
              {addOns.map((addon) => (
                <label key={addon.id} className={`packages-addon-row ${selectedAddOns.includes(addon.id) ? 'checked' : ''}`}>
                  <div className="packages-addon-copy">
                    <ShieldCheck size={18} />
                    <div>
                      <strong>{addon.label}</strong>
                      <span>{addon.price ? `PKR ${addon.price.toLocaleString()}` : 'Included'}</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.id)}
                    onChange={() => toggleAddOn(addon.id)}
                  />
                </label>
              ))}
            </div>

            <div className="packages-step">
              <span>3</span>
              <h3>Your details</h3>
            </div>
            <div className="packages-form-grid">
              <label>
                <span>Full Name *</span>
                <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Enter your full name" />
              </label>
              <label>
                <span>Phone Number *</span>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03xx - xxxxxxx" />
              </label>
              <label>
                <span>Email Address (optional)</span>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Enter your email" />
              </label>
              <label>
                <span>Select Date *</span>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
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
              <button type="button" className="packages-submit">Book Now</button>
            </div>
          </div>
        </section>

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
                <h2>QUALITY YOU CAN TRUST</h2>
                <div className="trust-list">
                  {trustItems.map(([title, text]) => (
                    <div className="trust-item" key={title}>
                      <span><ShieldCheck size={17} /></span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
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
