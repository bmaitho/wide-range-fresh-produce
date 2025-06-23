import React from 'react';
import './About.css';

export default function About() {
  return (
    <main className="about-page container">
      <section className="about-intro">
        <h1>About Wide Range Fresh Produce Ltd</h1>
        <p>
          Wide Range Fresh Produce Ltd is a Kenyan agribusiness committed to professional chili farming. 
          Our founder has years of experience in chili cultivation and leads a dedicated team focused 
          on helping farmers across the country access consistent markets.
        </p>
      </section>

      <section id="farming-model" className="about-section">
        <h2>Our Farming Model</h2>
        <ul>
          <li>Direct partnerships with local chili farmers.</li>
          <li>End-to-end management: from seedling to shipment.</li>
          <li>Strict quality controls at every step.</li>
          <li>Farmer support programs and training.</li>
        </ul>
      </section>

      <section id="quality" className="about-section">
        <h2>Quality Assurance</h2>
        <ul>
          <li>On-site inspections every 2 weeks.</li>
          <li>Soil & lab testing for each batch.</li>
          <li>Batch tracking for traceability.</li>
          <li>Continuous improvement via feedback loops.</li>
        </ul>
      </section>

      <section id="market" className="about-section">
        <h2>Guaranteed Market</h2>
        <ul>
          <li>Contracts with major distributors.</li>
          <li>Dynamic harvest scheduling aligned to demand cycles.</li>
          <li>Risk-sharing mechanisms to protect farmers.</li>
        </ul>
      </section>

      <section id="sustainability" className="about-section">
        <h2>Sustainability & Impact</h2>
        <ul>
          <li>Environmentally responsible farming practices.</li>
          <li>Empowering local communities through fair pricing.</li>
          <li>Reduction of post-harvest losses via efficient logistics.</li>
        </ul>
      </section>
    </main>
  );
}
