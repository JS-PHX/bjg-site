import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [showNav, setShowNav] = useState(false);
  
    const toggleNav = () => {
        setShowNav(!showNav);
      };

  return (
    <header>
      <nav class="navbar">
        <div class="nav-container">
          <button class="hamburger-btn" onClick={toggleNav}>
            <span class="hamburger-icon"></span>
          </button>
          <Link to="/">
            <img class="logoLink" src="./pics/TruckLogo.png" alt="logo"></img>
          </Link>
          <h1 class="title">BJG Trucking</h1>
        </div>
        <div class={`nav-links ${showNav ? "show-nav" : ""}`}>
          <Link class="navLinks" to="/" onClick={toggleNav}>
            Home
          </Link>
          <Link class="navLinks" to="/ContactUs" onClick={toggleNav}>
            Contact
          </Link>
          <Link class="navLinks" to="/gallery" onClick={toggleNav}>
            Gallery
          </Link>
        </div>
      </nav>
    </header>
  );
}
