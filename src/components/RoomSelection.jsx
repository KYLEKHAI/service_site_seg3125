import React from "react";
import "./RoomSelection.css";

const RoomSelection = ({ setCurrentPage, bookingData, setBookingData }) => {
  const rooms = [
    {
      id: 1,
      name: "Studio A",
      size: "Small",
      hourlyRate: 35,
      location: "Toronto, ON",
      description: "Perfect for solo recordings and vocals",
      features: ["Vocal booth", "Basic mixing desk", "Monitor speakers"],
    },
    {
      id: 2,
      name: "Studio B",
      size: "Medium",
      hourlyRate: 55,
      location: "Vancouver, BC",
      description: "Great for small bands and duos",
      features: [
        "Live room",
        "Control room",
        "Drum kit included",
        "Guitar amps",
      ],
    },
    {
      id: 3,
      name: "Studio C",
      size: "Large",
      hourlyRate: 75,
      location: "Montreal, QC",
      description: "Full band recording capabilities",
      features: [
        "Large live room",
        "Isolation booths",
        "Full drum kit",
        "Piano",
      ],
    },
  ];

  const handleRoomSelect = (room) => {
    setBookingData((prev) => ({
      ...prev,
      room: room,
      totalPrice: room.hourlyRate,
    }));
    setCurrentPage("equipment-selection");
  };

  const handleBack = () => {
    setCurrentPage("home");
  };

  return (
    <div className="room-selection">
      <div className="page-header">
        <button className="btn btn-secondary" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="page-title">Select a Studio Room</h1>
        <p className="page-subtitle">
          Choose the perfect space for your recording session
        </p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-header">
              <h3 className="room-name">{room.name}</h3>
              <div className="room-size">{room.size}</div>
            </div>

            <div className="room-location">{room.location}</div>
            <p className="room-description">{room.description}</p>

            <div className="room-features">
              {room.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  ✓ {feature}
                </div>
              ))}
            </div>

            <div className="room-footer">
              <div className="room-price">${room.hourlyRate}/hour</div>
              <button
                className="btn btn-primary"
                onClick={() => handleRoomSelect(room)}
              >
                Select Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelection;
