import React from "react";
import "./Contact.css";

const Contact = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">More information</p>

        <div className="business-info">
          <div className="info-item">
            <span className="label">Business Name:</span>
            <span className="value">Simple Studio</span>
          </div>
          <div className="info-item">
            <span className="label">Business Type:</span>
            <span className="value">Recording Studio Booking Service Site</span>
          </div>
        </div>

        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <div className="info-item">
            <span className="label">Email:</span>
            <span className="value">simplestudio@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="label">Phone:</span>
            <span className="value">613-xxx-xxxx</span>
          </div>
        </div>

        <div className="designer-info">
          <p className="designer-credit">Designed by Kyle Khai Tran</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
