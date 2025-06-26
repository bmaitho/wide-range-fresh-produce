import React, { useState } from 'react';
import './About.css';

const sections = [
  {
    key: 'farming',
    title: 'Our Farming Model',
    items: [
      'Direct partnerships with local chili farmers.',
      'End-to-end management: from seedling to shipment.',
      'Strict quality controls at every step.',
      'Farmer support programs and training.',
    ],
  },
  {
    key: 'quality',
    title: 'Quality Assurance',
    items: [
      'On-site inspections every 2 weeks.',
      'Soil & lab testing for each batch.',
      'Batch tracking for traceability.',
      'Continuous improvement via feedback loops.',
    ],
  },
  {
    key: 'market',
    title: 'Guaranteed Market',
    items: [
      'Contracts with major distributors.',
      'Dynamic harvest scheduling aligned to demand cycles.',
      'Risk-sharing mechanisms to protect farmers.',
    ],
  },
  {
    key: 'sustainability',
    title: 'Sustainability & Impact',
    items: [
      'Environmentally responsible farming practices.',
      'Empowering local communities through fair pricing.',
      'Reduction of post-harvest losses via efficient logistics.',
    ],
  },
];

export default function About() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <main className="about-page container section">
      <h1>About Wide Range Fresh Produce Ltd</h1>
      <p className="about-intro">
        Wide Range Fresh Produce Ltd is a Kenyan agribusiness committed to
        professional chili farming. Our founder has years of experience in chili
        cultivation and leads a dedicated team focused on helping farmers across
        the country access consistent markets.
      </p>

      <div className="accordion">
        {sections.map(({ key, title, items }) => (
          <div key={key} className="accordion-item">
            <button
              className={`accordion-header ${openKey === key ? 'open' : ''}`}
              onClick={() => toggle(key)}
            >
              {title}
              <span className="accordion-icon">
                {openKey === key ? '−' : '+'}
              </span>
            </button>

            <div
              className={`accordion-body ${openKey === key ? 'open' : ''}`}
            >
              <ul>
                {items.map((txt, i) => (
                  <li key={i}>{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
