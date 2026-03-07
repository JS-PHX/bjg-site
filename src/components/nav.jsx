import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <header>
        <nav className="navbar">
          <div className="navbar-links">
            <p>
              <Link className="navLinks" to="/home">
                Home
              </Link>
            </p>
            <p>
              <Link className="navLinks" to="/gallery">
                Gallery
              </Link>
            </p>
            <p>
              <Link className="navLinks" to="/EmailForm">
                Contact
              </Link>
            </p>
          </div>
          <div className="navbar-logo">
            <Link to="/">
              <img
                className="logoLink"
                src="./pics/TruckLogo.png"
                alt="logo"
              ></img>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
  
