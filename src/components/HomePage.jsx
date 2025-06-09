import React from "react";
import "./HomePage.css";

const HomePage = ({ setCurrentPage, setBookingData }) => {
  const handleQuickBooking = () => {
    setBookingData((prev) => ({ ...prev, bookingType: "quick" }));
    setCurrentPage("room-selection");
  };

  const handlePremiumBooking = () => {
    setBookingData((prev) => ({ ...prev, bookingType: "premium" }));
    setCurrentPage("premium-studios");
  };

  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">Simple Studio</h1>
        <p className="hero-subtitle">
          Book various studios across Canada and record your music
          professionally. We support both independent artists to full team
          production.
        </p>

        <div className="booking-options">
          <div className="booking-card">
            <div className="booking-header">
              <h3 className="booking-title">Quick Time Booking</h3>
              <p className="booking-description">
                Perfect for solo artists and quick sessions
              </p>
            </div>

            <div className="booking-features">
              <div className="feature">✓ Fast booking process</div>
              <div className="feature">✓ Budget-friendly rates</div>
              <div className="feature">✓ Essential equipment included</div>
              <div className="feature">✓ 1-4 hour sessions</div>
            </div>

            <div className="booking-price">Starting at $50/hour</div>

            <button
              className="btn btn-primary btn-large"
              onClick={handleQuickBooking}
            >
              Book Now
            </button>
          </div>

          <div className="booking-card">
            <div className="booking-header">
              <h3 className="booking-title">Premium Booking</h3>
              <p className="booking-description">
                Full-service studio experience for professionals
              </p>
            </div>

            <div className="booking-features">
              <div className="feature">✓ Famous studio locations</div>
              <div className="feature">✓ Full band setups</div>
              <div className="feature">✓ Professional sound engineers</div>
              <div className="feature">✓ Secure booking with deposit</div>
            </div>

            <div className="booking-price">Starting at $200/hour</div>

            <button
              className="btn btn-secondary btn-large"
              onClick={handlePremiumBooking}
            >
              Book Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
