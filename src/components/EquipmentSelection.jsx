import React, { useState } from "react";
import "./EquipmentSelection.css";

const EquipmentSelection = ({
  setCurrentPage,
  bookingData,
  setBookingData,
}) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const equipment = [
    {
      id: 1,
      name: "Professional Microphone",
      price: 5,
    },
    {
      id: 2,
      name: "Guitar Amplifier",
      price: 8,
    },
    {
      id: 3,
      name: "Bass Guitar",
      price: 10,
    },
    {
      id: 4,
      name: "Keyboard/Piano",
      price: 10,
    },
    {
      id: 5,
      name: "Audio Interface",
      price: 5,
    },
    {
      id: 6,
      name: "Studio Headphones",
      price: 3,
    },
  ];

  const handleEquipmentToggle = (item) => {
    setSelectedEquipment((prev) => {
      const isSelected = prev.find((eq) => eq.id === item.id);
      if (isSelected) {
        return prev.filter((eq) => eq.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const calculateTotal = () => {
    const equipmentCost = selectedEquipment.reduce(
      (sum, item) => sum + item.price,
      0
    );
    return bookingData.room.hourlyRate + equipmentCost;
  };

  const handleContinue = () => {
    setBookingData((prev) => ({
      ...prev,
      equipment: selectedEquipment,
      totalPrice: calculateTotal(),
    }));
    setCurrentPage("datetime-selection");
  };

  const handleBack = () => {
    setCurrentPage("room-selection");
  };

  return (
    <div className="equipment-selection">
      <div className="page-header">
        <button className="btn btn-secondary" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="page-title">Select Audio Equipment</h1>
        <p className="page-subtitle">
          Add extra equipment to enhance your recording session
        </p>
      </div>

      <div className="content-layout">
        <div className="equipment-grid">
          {equipment.map((item) => (
            <div
              key={item.id}
              className={`equipment-card ${
                selectedEquipment.find((eq) => eq.id === item.id)
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleEquipmentToggle(item)}
            >
              <h3 className="equipment-name">{item.name}</h3>
              <div className="equipment-footer">
                <div className="equipment-price">+${item.price}/hour</div>
                <div className="equipment-checkbox">
                  {selectedEquipment.find((eq) => eq.id === item.id)
                    ? "✓"
                    : "○"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="booking-summary">
          <div className="summary-card">
            <h3 className="summary-title">Booking Summary</h3>

            <div className="summary-item">
              <span>Room: {bookingData.room.name}</span>
              <span>${bookingData.room.hourlyRate}/hour</span>
            </div>

            {selectedEquipment.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.name}</span>
                <span>+${item.price}/hour</span>
              </div>
            ))}

            <div className="summary-total">
              <span>Total per hour:</span>
              <span>${calculateTotal()}</span>
            </div>

            <button
              className="btn btn-primary btn-large"
              onClick={handleContinue}
            >
              Continue to Date & Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentSelection;
