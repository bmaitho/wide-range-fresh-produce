import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setStatus('PENDING');
    try {
      const response = await fetch('https://formspree.io/f/<your-form-id>', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (response.ok) {
        setStatus('SUCCESS');
        e.target.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('ContactForm error:', error);
      setStatus('ERROR');
    }
  };

  return (
    <section className="contact-section container" id="contact">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name<span className="required">*</span>:
          <input type="text" name="name" required />
        </label>
        <label>
          Email<span className="required">*</span>:
          <input type="email" name="email" required />
        </label>
        <label>
          Message<span className="required">*</span>:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit" className="btn">Send Message</button>
        {status === 'PENDING' && <p className="status-msg">Sending...</p>}
        {status === 'SUCCESS' && <p className="status-msg success">Thank you! Your message has been sent.</p>}
        {status === 'ERROR' && <p className="status-msg error">Oops! Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}
