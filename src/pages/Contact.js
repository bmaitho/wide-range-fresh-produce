// src/pages/Contact.js
export default function Contact() {
    return (
      <section className="container section">
        <h2>Work With Us</h2>
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Project Details"
          />
          <button type="submit" className="btn btn--primary btn--lg">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  