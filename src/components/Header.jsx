import React from "react";
import "./Header.css";

const Header = ({ setCurrentPage }) => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage("contact");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={handleHomeClick}>
          <span className="logo-text">Simple Studio</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link" onClick={handleHomeClick}>
            Home
          </a>
          <a href="#contact" className="nav-link" onClick={handleContactClick}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
