import React from "react";
import "./BookingConfirmation.css";

const BookingConfirmation = ({ bookingData, resetBooking }) => {
  const formatDate = (date) => {
    if (!date) return "Not selected";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isQuickBooking = bookingData.bookingType === "quick";
  const isPremiumBooking = bookingData.bookingType === "premium";

  return (
    <div className="booking-confirmation">
      <div className="confirmation-header">
        <div className="success-icon">✓</div>
        <h1 className="confirmation-title">Booking Confirmed!</h1>
        <p className="confirmation-subtitle">
          {isQuickBooking && "Your studio session has been booked successfully"}
          {isPremiumBooking && "Your premium studio reservation is confirmed"}
        </p>
      </div>

      <div className="confirmation-content">
        <div className="details-card">
          <h3 className="card-title">Booking Details</h3>

          {isQuickBooking && (
            <>
              <div className="detail-item">
                <span className="label">Studio Room:</span>
                <span className="value">{bookingData.room?.name}</span>
              </div>
              <div className="detail-item">
                <span className="label">Location:</span>
                <span className="value">{bookingData.room?.location}</span>
              </div>
              <div className="detail-item">
                <span className="label">Base Rate:</span>
                <span className="value">
                  ${bookingData.room?.hourlyRate}/hour
                </span>
              </div>
              {bookingData.equipment?.length > 0 && (
                <div className="detail-item">
                  <span className="label">Equipment:</span>
                  <div className="equipment-list">
                    {bookingData.equipment.map((item) => (
                      <div key={item.id} className="equipment-item">
                        {item.name} (+${item.price}/hour)
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {isPremiumBooking && (
            <>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">{bookingData.studio?.name}</span>
              </div>
              <div className="detail-item">
                <span className="label">Location:</span>
                <span className="value">{bookingData.studio?.location}</span>
              </div>
              <div className="detail-item">
                <span className="label">Capacity:</span>
                <span className="value">{bookingData.studio?.capacity}</span>
              </div>
              <div className="detail-item">
                <span className="label">Rate:</span>
                <span className="value">
                  ${bookingData.studio?.hourlyRate}/hour
                </span>
              </div>
              {bookingData.contactInfo?.depositAmount && (
                <div className="detail-item">
                  <span className="label">Deposit Paid:</span>
                  <span className="value">
                    ${bookingData.contactInfo.depositAmount}
                  </span>
                </div>
              )}
              <div className="detail-item">
                <span className="label">Studio Contact:</span>
                <span className="value">(416) 555-0123</span>
              </div>
            </>
          )}

          {bookingData.date && (
            <div className="detail-item">
              <span className="label">Date:</span>
              <span className="value">{formatDate(bookingData.date)}</span>
            </div>
          )}

          {bookingData.time && (
            <div className="detail-item">
              <span className="label">Time:</span>
              <span className="value">{bookingData.time}</span>
            </div>
          )}

          {bookingData.duration && (
            <div className="detail-item">
              <span className="label">Duration:</span>
              <span className="value">
                {bookingData.duration} hour
                {bookingData.duration > 1 ? "s" : ""}
              </span>
            </div>
          )}

          <div className="detail-item total">
            <span className="label">Total Price:</span>
            <span className="value">${bookingData.totalPrice}</span>
          </div>

          <button className="btn btn-primary btn-large" onClick={resetBooking}>
            Book Another Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
