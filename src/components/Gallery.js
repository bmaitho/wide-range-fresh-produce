import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const context = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
    setImages(context.keys().map(context));
  }, []);

  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <h2>Our Fields in Action</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Chili field ${i+1}`} className="hover-zoom" />
        ))}
      </div>
    </section>
  );
}
