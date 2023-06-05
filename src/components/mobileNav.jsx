import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(prevShowNav => !prevShowNav);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img className="logoLink" src="./pics/TruckLogo.png" alt="logo" />
            </Link>
            <h1 className="title">BJG Trucking</h1>
          </div>
          <button className={`hamburger-btn ${showNav ? "open" : ""}`} onClick={toggleNav}>
            <span className="hamburger-icon"></span>
          </button>
        </div>
        <div className={`nav-links ${showNav ? "show-nav" : ""}`}>
          <Link className="navLink" to="/" onClick={toggleNav}>
            Home
          </Link>
          <Link className="navLink" to="/ContactUs" onClick={toggleNav}>
            Contact
          </Link>
          <Link className="navLink" to="/gallery" onClick={toggleNav}>
            Gallery
          </Link>
        </div>
      </nav>
    </header>
  );
}

