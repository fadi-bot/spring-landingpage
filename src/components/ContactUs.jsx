// File: src/components/ContactUs.jsx
import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section id="contact" className="contact-us-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a question or need a quote? Fill out the form or contact us directly through the details provided. We are here to help!</p>
          <ul className="info-list">
            <li><strong>Email:</strong> Info.spring119@gmail.com</li>
            <li><strong>Phone:</strong> +923315848484           </li>
            <li><strong>Address:</strong> House#119, St.02, BlockJ, Gulberg Greens Residencia</li>
          </ul>
        </div>
        <div className="contact-form">
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
      </div>
    </section>
  );
}

export default ContactUs;
