import React from 'react';
import '../styles/pages/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-label">GET IN TOUCH</span>
          <h1 className="contact-title">Let's create your dream space.</h1>
          <p className="contact-subtitle">Whether you have a specific vision or need help finding one, our team is here to guide you.</p>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>STUDIO</h3>
              <p>123 Design District<br />Ambernath, Maharashtra</p>
            </div>
            <div className="info-item">
              <h3>CONTACT</h3>
              <p>hello@sjinteriors.com<br />+91 98765 43210</p>
            </div>
            <div className="info-item">
              <h3>FOLLOW</h3>
              <p>Instagram / Pinterest / Houzz</p>
            </div>
          </div>
        </div>
        
        <form className="contact-form">
          <div className="form-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>INTERESTED IN</label>
            <select>
              <option>Residential Design</option>
              <option>Commercial Design</option>
              <option>Consultation</option>
            </select>
          </div>
          <div className="form-group">
            <label>MESSAGE</label>
            <textarea placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;