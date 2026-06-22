import React from 'react';
import { Clock, Fuel, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    title: 'High-Speed Diesel & Petrol',
    text: 'Reliable bulk fuel supply for commercial, industrial, transportation, and construction operations with consistent quality and dependable availability.',
    Icon: Fuel,
  },
  {
    title: 'Fleet Fuel Programs',
    text: 'Tailored fuel programs designed for fleet operators and large-scale businesses, helping streamline fuel management and reduce inefficiencies.',
    Icon: Clock,
  },
  {
    title: 'Fuel Logistics & Supply Management',
    text: 'End-to-end fuel coordination, procurement, and delivery management that ensures timely supply and operational continuity.',
    Icon: ShieldCheck,
  },
];

export default function FuelSupplySection() {
  return (
    <section className="fuel-section">
      <div className="container">
        <div className="fuel-head">
          <div>
            <h2>Reliable Fuel Supply for Uninterrupted Operations</h2>
            <p>
              Noren provides petroleum sourcing, fuel supply management, logistics coordination, and storage support solutions
              for business operations. Through our reliable supplier partnerships and management systems, we help organizations
              maintain operational continuity, optimize fuel procurement, and ensure uninterrupted access to quality fuel products.
            </p>
          </div>
          <a href="#book">Discuss Fuel Requirements</a>
        </div>
        <div className="fuel-visual">
          <div className="fuel-card-stack" aria-label="Fuel solutions">
            <span>Fuel Solutions</span>
            {solutions.map(({ title, text, Icon }) => (
              <article className="fuel-solution" key={title}>
                <Icon size={22} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
