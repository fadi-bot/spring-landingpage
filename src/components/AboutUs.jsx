import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.jpg';

function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      <div className="about-us-container">
        {/* Yahan 'data-aos' add karein */}
        <div className="about-text" data-aos="fade-right">
          <h2>About Us</h2>
          <h3>Smart, Reliable, and Efficient Industrial Procurement Solutions</h3>
          <p>
            Though newly established, our company is backed by a team of industry experts with years of proven experience and a strong reputation for credibility and service excellence. We are driven by a bold vision to modernize procurement practices and bring value-driven solutions to our clients. With a focus on quality, innovation, and long-term partnerships, we aim to become a trusted name across industrial sectors.
          </p>
          <h3>Our Story</h3>
          <p>
            Spring Int Traders Pvt. Ltd. was founded by a group of highly experienced professionals with a shared vision to transform the industrial procurement landscape. Drawing on years of hands-on expertise and industry insight, our team is committed to setting new standards in reliability, service, and customer satisfaction.
          </p>
        </div>
        {/* Yahan 'data-aos' add karein */}
        <div className="about-image" data-aos="fade-left">
          <img src={aboutImage} alt="Industrial procurement and supplies" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;