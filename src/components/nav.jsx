import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img
              className="logoLink"
              src="./pics/TruckLogo.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="navbar-links">
          <Link className="navLinks" to="/home">Home</Link>
          <Link className="navLinks" to="/EmailForm">Contact</Link>
          <Link className="navLinks" to="/gallery">Gallery</Link>
        </div>
      </nav>
    </header>
  );
}