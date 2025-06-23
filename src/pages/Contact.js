// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css'; // optional page-specific CSS

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Section: Work With Us / Contact Form */}
      <section className="contact-page__form-section container section">
        <h2 className="contact-page__heading">Work With Us</h2>
        <ContactForm />
      </section>

      {/* Section: Additional Contact Info */}
      <section className="contact-page__info container section">
        <h2 className="contact-page__heading">Other Ways to Reach Us</h2>
        <p>Email: <a href="mailto:info@widerangefreshproduce.com">info@widerangefreshproduce.com</a></p>
        <p>Phone: +254-7XXXXXXXX</p>
        <p>Address: P.O. Box 748-00242, Kajiado, Kenya</p>
        {/* Optional embedded map */}
        {/* 
        <div className="contact-page__map">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        */}
      </section>
    </main>
  );
}
