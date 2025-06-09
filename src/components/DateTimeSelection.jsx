import React, { useState } from "react";
import "./DateTimeSelection.css";

const DateTimeSelection = ({ setCurrentPage, bookingData, setBookingData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(1);

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const durations = [1, 2, 3, 4];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const calculateFinalPrice = () => {
    return bookingData.totalPrice * selectedDuration;
  };

  const handleConfirmBooking = () => {
    setBookingData((prev) => ({
      ...prev,
      date: selectedDate,
      time: "09:00", // Default time for quick bookings
      duration: selectedDuration,
      totalPrice: calculateFinalPrice(),
    }));
    setCurrentPage("confirmation");
  };

  const handleBack = () => {
    setCurrentPage("equipment-selection");
  };

  const isBookingComplete = selectedDate && selectedDuration;

  return (
    <div className="datetime-selection">
      <div className="page-header">
        <button className="btn btn-secondary" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="page-title">Select Date & Duration</h1>
        <p className="page-subtitle">
          Choose when you'd like to book your studio session
        </p>
      </div>

      <div className="content-layout">
        <div className="selection-content">
          <div className="selection-section">
            <h3 className="section-title">Select Date</h3>
            <div className="dates-grid">
              {generateDates().map((date, index) => (
                <button
                  key={index}
                  className={`date-card ${
                    selectedDate?.toDateString() === date.toDateString()
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {formatDate(date)}
                </button>
              ))}
            </div>
          </div>

          <div className="selection-section">
            <h3 className="section-title">Session Duration</h3>
            <div className="duration-grid">
              {durations.map((duration) => (
                <button
                  key={duration}
                  className={`duration-card ${
                    selectedDuration === duration ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration} hour{duration > 1 ? "s" : ""}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="summary-card">
            <h3 className="summary-title">Final Booking Summary</h3>

            <div className="summary-item">
              <span>Room: {bookingData.room.name}</span>
              <span>${bookingData.room.hourlyRate}/hour</span>
            </div>

            {bookingData.equipment.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.name}</span>
                <span>+${item.price}/hour</span>
              </div>
            ))}

            {selectedDate && (
              <div className="summary-item">
                <span>Date:</span>
                <span>{formatDate(selectedDate)}</span>
              </div>
            )}

            <div className="summary-item">
              <span>Time:</span>
              <span>9:00 AM</span>
            </div>

            <div className="summary-item">
              <span>Duration:</span>
              <span>
                {selectedDuration} hour{selectedDuration > 1 ? "s" : ""}
              </span>
            </div>

            <div className="summary-total">
              <span>Total Price:</span>
              <span>${calculateFinalPrice()}</span>
            </div>

            <button
              className={`btn btn-large ${
                isBookingComplete ? "btn-primary" : "btn-secondary"
              }`}
              onClick={handleConfirmBooking}
              disabled={!isBookingComplete}
            >
              {isBookingComplete ? "Confirm Booking" : "Select Date"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
