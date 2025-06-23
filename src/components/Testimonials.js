import React from 'react';
import './Testimonials.css';

// Example data; replace with real testimonials as needed
const testimonials = [
  {
    quote: "Working with Wide Range Fresh Produce Ltd transformed our supply chain. Quality is unmatched.",
    author: "Major Distributor Co."
  },
  {
    quote: "Our farmers appreciate the guaranteed off-take and training programs.",
    author: "Local Farmer Group"
  },
  // add more...
];

export default function Testimonials() {
  return (
    <section className="testimonials-section container">
      <h2>What Our Partners Say</h2>
      <div className="testimonials-list">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-author">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
