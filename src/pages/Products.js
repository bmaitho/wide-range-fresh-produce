import React from 'react';
import './Products.css';

// Example product data; replace with real data or fetch from API
const productVarieties = [
  {
    name: 'Mild Red Chili',
    image: require('../assets/mild-red.jpg'),
    description: 'Perfect for mild sauces and salads.',
    heatLevel: 'Mild'
  },
  {
    name: 'Hot Cayenne',
    image: require('../assets/Cayenne.jpg'),
    description: 'Spicy and vibrant, for sauces and drying.',
    heatLevel: 'Hot'
  },
  {
    name: 'Habanero',
    image: require('../assets/habanero.jpg'),
    description: 'Intense heat for specialty markets.',
    heatLevel: 'Very Hot'
  },
  // add more as needed
];

// Example harvest schedule data
const harvestSchedule = [
  { variety: 'Mild Red Chili', season: 'March - May' },
  { variety: 'Hot Cayenne', season: 'June - August' },
  { variety: 'Habanero', season: 'September - November' },
];

export default function Products() {
  return (
    <main className="products-page container">
      <h1>Our Chili Varieties</h1>
      <div className="products-grid">
        {productVarieties.map((p, idx) => (
          <div key={idx} className="product-card">
            <img src={p.image} alt={p.name} loading="lazy" />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>Heat Level:</strong> {p.heatLevel}</p>
          </div>
        ))}
      </div>

      <section id="harvest-schedule" className="harvest-section">
        <h2>Harvest Schedule</h2>
        <table className="harvest-table">
          <thead>
            <tr>
              <th>Variety</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {harvestSchedule.map((h, idx) => (
              <tr key={idx}>
                <td>{h.variety}</td>
                <td>{h.season}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="order-process-section">
        <h2>Order Process</h2>
        <ol>
          <li>Inquiry via contact form or email.</li>
          <li>Discuss volume, timing, and logistics.</li>
          <li>Agreement & contract.</li>
          <li>Harvest coordination and quality checks.</li>
          <li>Shipment and payment settlement.</li>
        </ol>
      </section>
    </main>
  );
}
