import React from 'react';
import './Hero.css';
import heroImage from '../assets/chili-hero.jpg'; // adjust path/name as in your project

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h2 className="company-name">Wide Range Fresh Produce Ltd</h2>
        <h1 className="hero-title">Your Trusted Chili Farming Partner</h1>
        <p className="hero-subtitle">Guaranteed quality. Consistent off-take. Sustainable growth.</p>
        <a href="#contact" className="hero-cta btn">Get in Touch</a>
      </div>
    </section>
  );
}

