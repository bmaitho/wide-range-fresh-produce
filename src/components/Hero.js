import React from 'react';
import chiliHero from '../assets/chili-hero.jpg';

export default function Hero({ tagline }) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${chiliHero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1 className="hero-tagline">{tagline}</h1>
    </section>
  );
}
