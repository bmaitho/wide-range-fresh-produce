import React from 'react';
import Accordion from './Accordion';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="howitworks-section container">
      <h2>How It Works</h2>
      <div className="howitworks-accordions">
        <Accordion title="Guaranteed Market">
          <p>
            We secure contracts with major distributors to ensure that every harvest has a buyer. 
            Harvest schedules are dynamically synced to demand cycles, minimizing waste and maximizing returns.
          </p>
          <p>
            <a href="/about#market" className="learn-more-inline">Learn more in About</a>
          </p>
        </Accordion>
        <Accordion title="Quality Control">
          <ul>
            <li>On-site inspections every 2 weeks.</li>
            <li>Soil and lab tests for each batch.</li>
            <li>Farmer training workshops quarterly.</li>
            <li>Traceability via batch codes & tracking.</li>
          </ul>
          <p>
            <a href="/about#quality" className="learn-more-inline">Learn more in About</a>
          </p>
        </Accordion>
        <Accordion title="Harvest Schedules">
          <p>
            Harvests are scheduled based on real-time market demand data. We coordinate with farmers to optimize timing, ensuring peak freshness and maximum price.
          </p>
          <p>
            <a href="/products#harvest-schedule" className="learn-more-inline">See schedule details in Products</a>
          </p>
        </Accordion>
      </div>
    </section>
  );
}
