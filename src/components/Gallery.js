import React, { useState } from 'react';
import './Gallery.css';

function importGalleryImages() {
  const ctx = require.context('../assets', false, /\.(jpe?g|png|svg)$/);
  return ctx.keys()
    .filter(key => {
      const lower = key.toLowerCase();
      return !lower.includes('logo') && !lower.includes('hero');
    })
    .map(key => ctx(key));
}

export default function Gallery() {
  const images = importGalleryImages();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = idx => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(-1);
  const showPrev = e => {
    e.stopPropagation();
    setLightboxIndex((lightboxIndex + images.length - 1) % images.length);
  };
  const showNext = e => {
    e.stopPropagation();
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <main className="gallery-page container section">
      <h1>Gallery</h1>
      <div className="polaroid-wall">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`polaroid ${
              idx < Math.ceil(images.length / 2) ? 'upright' : 'tilted'
            }`}
            onClick={() => openLightbox(idx)}
          >
            <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-nav prev" onClick={showPrev}>
            ‹
          </button>
          <img
            className="lightbox-image"
            src={images[lightboxIndex]}
            alt={`Enlarged ${lightboxIndex + 1}`}
          />
          <button className="lightbox-nav next" onClick={showNext}>
            ›
          </button>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
