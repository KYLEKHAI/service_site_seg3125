import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import RoomSelection from "./components/RoomSelection.jsx";
import EquipmentSelection from "./components/EquipmentSelection.jsx";
import DateTimeSelection from "./components/DateTimeSelection.jsx";
import PremiumStudioSelection from "./components/PremiumStudioSelection.jsx";
import SecureBooking from "./components/SecureBooking.jsx";
import BookingConfirmation from "./components/BookingConfirmation.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [bookingData, setBookingData] = useState({
    bookingType: null,
    room: null,
    studio: null,
    equipment: [],
    date: null,
    time: null,
    duration: null,
    totalPrice: 0,
    contactInfo: {},
    depositPaid: false,
  });

  const resetBooking = () => {
    setCurrentPage("home");
    setBookingData({
      bookingType: null,
      room: null,
      studio: null,
      equipment: [],
      date: null,
      time: null,
      duration: null,
      totalPrice: 0,
      contactInfo: {},
      depositPaid: false,
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setBookingData={setBookingData}
          />
        );
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      case "room-selection":
        return (
          <RoomSelection
            setCurrentPage={setCurrentPage}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case "equipment-selection":
        return (
          <EquipmentSelection
            setCurrentPage={setCurrentPage}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case "datetime-selection":
        return (
          <DateTimeSelection
            setCurrentPage={setCurrentPage}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case "premium-studios":
        return (
          <PremiumStudioSelection
            setCurrentPage={setCurrentPage}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case "secure-booking":
        return (
          <SecureBooking
            setCurrentPage={setCurrentPage}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case "confirmation":
        return (
          <BookingConfirmation
            bookingData={bookingData}
            resetBooking={resetBooking}
          />
        );
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setBookingData={setBookingData}
          />
        );
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;
