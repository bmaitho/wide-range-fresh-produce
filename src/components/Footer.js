import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-container container">
        <div className="footer-about">
          <h4>Wide Range Fresh Produce Ltd</h4>
          <p>Professional chili farming & guaranteed off-take.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@widerangefreshproduce.com</p>
          <p>Phone: +254-704623982</p>
          <p>Address: P.O. Box 748-00242, Kajiado, Kenya</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Wide Range Fresh Produce Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
