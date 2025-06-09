import React, { useState } from "react";
import "./SecureBooking.css";

const SecureBooking = ({ setCurrentPage, bookingData, setBookingData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    idVerification: null,
    agreeToTerms: false,
    depositAmount: Math.round(bookingData.totalPrice * 0.3),
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      idVerification: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingData((prev) => ({
      ...prev,
      contactInfo: formData,
      depositPaid: true,
    }));
    setCurrentPage("confirmation");
  };

  const handleBack = () => {
    setCurrentPage("premium-studios");
  };

  return (
    <div className="secure-booking">
      <div className="page-header">
        <button className="btn btn-secondary" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="page-title">Secure Booking & Deposit</h1>
        <p className="page-subtitle">
          Complete your premium studio reservation
        </p>
      </div>

      <div className="content-layout">
        <div className="booking-form">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3 className="section-title">Contact Information</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Band Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="section-title">Identity Verification</h3>
              <p className="section-description">
                For security purposes, please upload a government-issued ID
              </p>

              <div className="form-group">
                <label htmlFor="idVerification">Upload ID Document *</label>
                <input
                  type="file"
                  id="idVerification"
                  name="idVerification"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileUpload}
                />
                {formData.idVerification && (
                  <div className="file-uploaded">
                    ✓ {formData.idVerification.name}
                  </div>
                )}
              </div>
            </div>

            <div className="form-section">
              <h3 className="section-title">Deposit & Terms</h3>

              <div className="deposit-info">
                <div className="deposit-amount">
                  <span>Required Deposit (30%):</span>
                  <span className="amount">${formData.depositAmount}</span>
                </div>
                <p className="deposit-note">
                  This deposit secures your booking. Cancellations within 48
                  hours will result in a deposit fee.
                </p>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>I agree to the terms and
                  conditions and cancellation policy *
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Book Now
            </button>
          </form>
        </div>

        <div className="booking-summary">
          <div className="summary-card">
            <h3 className="summary-title">Booking Summary</h3>

            <div className="summary-item">
              <span>Studio:</span>
              <span>{bookingData.studio.name}</span>
            </div>

            <div className="summary-item">
              <span>Location:</span>
              <span>{bookingData.studio.location}</span>
            </div>

            <div className="summary-item">
              <span>Hourly Rate:</span>
              <span>${bookingData.studio.hourlyRate}/hour</span>
            </div>

            <div className="summary-item">
              <span>Capacity:</span>
              <span>{bookingData.studio.capacity}</span>
            </div>

            <div className="summary-total">
              <span>Deposit Required:</span>
              <span>${formData.depositAmount}</span>
            </div>

            <div className="security-note">
              <h4>🔒 Secure Booking</h4>
              <p>
                Your information is encrypted and secure. You'll receive booking
                confirmation and studio contact details after payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureBooking;
