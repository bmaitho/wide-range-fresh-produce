// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import './Home.css';

// Option A: Inline require.context
function importGalleryImages() {
  let context;
  try {
    context = require.context('../assets', false, /\.(jpe?g|png|svg)$/);
  } catch (err) {
    console.warn('No assets found for gallery import:', err);
    return [];
  }
  // context.keys() e.g. ['./logo.png', './chili-hero.jpg', './Byadgi Chilli Farm.jpeg', ...]
  const all = context.keys().map((key) => {
    const src = context(key);
    return { key, src };
  });
  // Filter out non-gallery images
  const filtered = all.filter(({ key }) => {
    const lower = key.toLowerCase();
    // Exclude logo
    if (lower.includes('logo')) return false;
    // Exclude hero images
    if (lower.includes('chili-hero') || lower.includes('chilli-hero') || lower.includes('hero')) return false;
    // Optionally exclude other known non-gallery files
    return true;
  });
  // Return array of src strings
  return filtered.map(({ src }) => src);
}

export default function Home() {
  // Dynamically import gallery images from src/assets
  const galleryImages = importGalleryImages();
  // For preview, pick up to first 4 images
  const previewImages = galleryImages.slice(0, 4);

  return (
    <main className="home-page">
      {/* Hero Banner */}
      <Hero />

      {/* Feature teaser cards */}
      <section className="homepage-features container">
        <div className="feature-card">
          <h3>Our Farming Model</h3>
          <p>Partnering directly with local chili farmers to ensure premium quality & guaranteed offtake.</p>
          <Link to="/about#farming-model" className="learn-more-inline">
            Learn More →
          </Link>
        </div>
        <div className="feature-card">
          <h3>Our Varieties</h3>
          <p>From mild to fiery, explore our range of chili pepper types suited to varied markets.</p>
          <Link to="/products" className="learn-more-inline">
            Explore Varieties →
          </Link>
        </div>
        <div className="feature-card">
          <h3>Quality Assurance</h3>
          <p>Rigorous inspections, lab testing, and continuous training programs.</p>
          <Link to="/about#quality" className="learn-more-inline">
            See Details →
          </Link>
        </div>
      </section>

      {/* How It Works accordions */}
      <HowItWorks />

      {/* Gallery preview */}
      {previewImages.length > 0 && (
        <section className="homepage-gallery-preview container">
          <h2>Gallery Preview</h2>
          <div className="gallery-preview-grid">
            {previewImages.map((src, idx) => (
              <div key={idx} className="gallery-preview-item">
                <img 
                  src={src} 
                  alt={`Gallery preview ${idx + 1}`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="view-more-inline">
            View Full Gallery →
          </Link>
        </section>
      )}

      {/* Testimonials */}
      <Testimonials />

      {/* Call to action */}
      <section className="homepage-contact-cta container" id="contact-cta">
        <h2>Ready to Partner?</h2>
        <p>Contact us today to discuss collaboration or orders.</p>
        <Link to="/contact" className="btn">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
