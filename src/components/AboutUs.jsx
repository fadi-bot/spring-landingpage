import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.jpg';

function AboutUs() {
  return (
    // UPDATED: Changed from "bg-white" to "bg-light"
    <section id="about" className="about-us-section bg-light">
      <div className="about-us-container">
        <div className="about-text" data-aos="fade-right">
          <h2>About Us</h2>
          <h3>Smart, Reliable, and Efficient Industrial Procurement Solutions</h3>
          <p>
            At Spring Int Traders Pvt. Ltd., we specialize in delivering smart, reliable, and efficient industrial procurement solutions. Though newly established, our company is backed by a team of industry experts with years of proven experience and a strong reputation for credibility and service excellence. We are driven by a bold vision to modernize procurement practices and bring value-driven solutions to our clients. With a focus on quality, innovation, and long-term partnerships, we aim to become a trusted name across industrial sectors.
          </p>
          <h3>Our History</h3>
          <p>
            Spring Int Traders Pvt. Ltd. was founded by a group of highly experienced professionals with a shared vision to transform the industrial procurement landscape. Drawing on years of hands-on expertise and industry insight, our team is committed to setting new standards in reliability, service, and customer satisfaction. Though the company is new, our foundation is built on proven knowledge, strong ethics, and a passion for driving meaningful impact in every partnership we create.
          </p>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img src={aboutImage} alt="Industrial procurement and supplies" />
        </div>
      </div>

      <div className="vision-container" data-aos="fade-up">
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p className="vision-quote">
            To be a trusted industry frontrunner, recognized for ethical practices, customer-centric innovation, and a commitment to raising standards across the procurement landscape.
          </p>
        </div>
        <div className="principles-grid">
          <h2>Our Guiding Principles</h2>
          <div className="principle-card">
            <h4>Ethical Commitment</h4>
            <p>We uphold honesty, accountability, and transparency in every aspect of our work, ensuring lasting trust with our clients and partners.</p>
          </div>
          <div className="principle-card">
            <h4>Progressive Thinking</h4>
            <p>We foster a culture of innovation—adapting swiftly, improving continuously, and staying ahead of industry needs through smart, future-ready solutions.</p>
          </div>
          <div className="principle-card">
            <h4>Responsible Growth</h4>
            <p>Our approach balances commercial success with environmental and social responsibility, creating sustainable value for all stakeholders.</p>
          </div>
          <div className="principle-card">
            <h4>Relentless Pursuit of Quality</h4>
            <p>We are dedicated to delivering excellence—consistently meeting the highest standards in product quality, service delivery, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;