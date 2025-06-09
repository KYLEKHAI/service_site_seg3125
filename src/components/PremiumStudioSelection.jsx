import React from "react";
import "./PremiumStudioSelection.css";

const PremiumStudioSelection = ({
  setCurrentPage,
  bookingData,
  setBookingData,
}) => {
  const premiumStudios = [
    {
      id: 1,
      name: "Future Studios",
      location: "Toronto, ON",
      hourlyRate: 300,
      features: [
        "SSL 9000J Console",
        "Neve 1073 Preamps",
        "Full Orchestral Recording",
        "Vintage Microphone Collection",
        "Professional Sound Engineer Included",
        "Steinway Grand Piano",
      ],
      capacity: "Up to 50 musicians",
    },
    {
      id: 2,
      name: "Real World Studios",
      location: "Ottawa, ON",
      hourlyRate: 250,
      features: [
        "SSL 4000G+ Console",
        "Pro Tools HDX System",
        "Live Room with 20ft Ceilings",
        "Isolation Booths",
        "Professional Sound Engineer Included",
        "Full Backline Available",
      ],
      capacity: "Up to 30 musicians",
    },
    {
      id: 3,
      name: "Skyline Studios",
      location: "Vancouver, BC",
      hourlyRate: 280,
      features: [
        "Neve VR Console",
        "Vintage Analog Gear",
        "Large Live Room",
        "Multiple Isolation Booths",
        "Professional Sound Engineer Included",
        "Hammond B3 Organ",
      ],
      capacity: "Up to 40 musicians",
    },
  ];

  const handleStudioSelect = (studio) => {
    setBookingData((prev) => ({
      ...prev,
      studio: studio,
      totalPrice: studio.hourlyRate,
    }));
    setCurrentPage("secure-booking");
  };

  const handleBack = () => {
    setCurrentPage("home");
  };

  return (
    <div className="premium-studio-selection">
      <div className="page-header">
        <button className="btn btn-secondary" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="page-title">Premium Studios</h1>
        <p className="page-subtitle">
          Select from our collection of world-class recording facilities
        </p>
      </div>

      <div className="studios-grid">
        {premiumStudios.map((studio) => (
          <div key={studio.id} className="premium-studio-card">
            <div className="studio-content">
              <div className="studio-header">
                <h3 className="studio-name">{studio.name}</h3>
                <div className="studio-location">{studio.location}</div>
              </div>

              <div className="studio-capacity">
                <strong>Capacity:</strong> {studio.capacity}
              </div>

              <div className="studio-features">
                <h4>Included Features:</h4>
                <div className="features-list">
                  {studio.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="studio-footer">
                <div className="studio-price">${studio.hourlyRate}/hour</div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleStudioSelect(studio)}
                >
                  Select Studio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumStudioSelection;
