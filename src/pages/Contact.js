import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkzlebk', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });
      const result = await response.json();
      if (result.ok || response.status === 200) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      console.error(err);
      setStatus('ERROR');
    }
  };

  return (
    <main className="contact-page container section">
      <h1>Work With Us</h1>
      <div className="contact-grid">
        {/* ===== Contact Form ===== */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name">Name<span className="required">*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email<span className="required">*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message<span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="How can we help you?"
            required
          />

          <button type="submit" className="btn submit-btn">
            Send Message
          </button>

          {status === 'SUCCESS' && (
            <p className="form-feedback success">Thanks! Your message has been sent.</p>
          )}
          {status === 'ERROR' && (
            <p className="form-feedback error">Oops! Something went wrong. Please try again.</p>
          )}
        </form>

        {/* ===== Contact Info ===== */}
        <div className="contact-info">
          <h2>Other Ways to Reach Us</h2>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@widerangefreshproduce.com">
              info@widerangefreshproduce.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +254-704623982
          </p>
          <p>
            <strong>Address:</strong><br />
            P.O. Box 748-00242,<br />
            Kajiado, Kenya
          </p>
        </div>
      </div>
    </main>
  );
}
