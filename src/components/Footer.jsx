import React from 'react';
import './Footer.css';
import logoImage from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    // Add the ID for the header link
    <footer className="main-footer" id="footer-contact">
      <div className="footer-container">

        {/* --- NEW: Contact Form (from PDF Page 8) --- */}
        <div className="footer-form">
          <h4>Let's Connect</h4>
          <p>Let's shape the future of procurement - together.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        {/* --- All other footer content --- */}
        <div className="footer-details">
          <div className="footer-about">
            <img src={logoImage} alt="Spring Int Traders Logo" className="footer-logo" />
            <h4>We Deliver Confidence</h4>
            <p>
              At Spring Int Traders Pvt. Ltd., we go beyond products - we deliver trust.
              Every transaction reflects our commitment to quality, integrity, and innovation.
            </p>
            <p>
              We're not just a supplier - we're your strategic partner, focused on helping your business grow stronger, faster, and smarter.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/#footer-contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li><strong>Phone:</strong> +92 331 584 8484</li>
              <li><strong>Phone:</strong> +92 306 584 84 84</li>
              <li><strong>Email:</strong> info.spring119@gmail.com</li>
              <li><strong>Website:</strong> <a href="www.spring-traders.org">www.spring-traders.org</a></li>
              <li><strong>Address:</strong> House no 628 street no 8, opposite tehzeeb bakers chaklala scheme 3 Rawalpindi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} - Spring Int Traders Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;