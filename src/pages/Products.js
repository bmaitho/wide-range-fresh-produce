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
  }
];

// Example harvest schedule data
const harvestSchedule = [
  { variety: 'Mild Red Chili', season: 'March - May' },
  { variety: 'Hot Cayenne', season: 'June - August' },
  { variety: 'Habanero', season: 'September - November' }
];

// Steps for order process
const orderSteps = [
  'Inquiry via contact form or email.',
  'Discuss volume, timing, and logistics.',
  'Agreement and contract.',
  'Harvest coordination and quality checks.',
  'Shipment and payment settlement.'
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

      <section id="harvest-schedule" className="harvest-section section">
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

      <section className="order-process-section section">
        <h2>Order Process</h2>
        <div className="order-steps">
          {orderSteps.map((label, idx) => (
            <div key={idx} className="order-step">
              <div className="order-step__circle">{idx + 1}</div>
              <div className="order-step__label">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
