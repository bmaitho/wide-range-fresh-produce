import React, { useState } from 'react';
import './Gallery.css';

function importGalleryImages() {
  let context;
  try {
    context = require.context('../assets', false, /\.(jpe?g|png|svg)$/);
  } catch (err) {
    console.warn('Gallery import error:', err);
    return [];
  }
  const all = context.keys().map((key) => {
    const src = context(key);
    return { key, src };
  });
  const filtered = all.filter(({ key }) => {
    const lower = key.toLowerCase();
    if (lower.includes('logo')) return false;
    if (lower.includes('chili-hero') || lower.includes('chilli-hero') || lower.includes('hero')) return false;
    return true;
  });
  return filtered.map(({ src }) => src);
}

export default function Gallery() {
  const images = importGalleryImages();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => setLightboxIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  const showNext = () => setLightboxIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));

  return (
    <main className="gallery-page container">
      <h1>Gallery</h1>
      {images.length === 0 ? (
        <p>No images to display.</p>
      ) : (
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt="" // leave empty or provide descriptive alt if known
                loading="lazy"
                onClick={() => openLightbox(idx)}
              />
            </div>
          ))}
        </div>
      )}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={showPrev}>‹</button>
            <img src={images[lightboxIndex]} alt="" />
            <button className="lightbox-next" onClick={showNext}>›</button>
          </div>
        </div>
      )}
    </main>
  );
}
