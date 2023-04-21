import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <header>
        <nav className="navbar">
                <p><Link className="navLinks" to="/gallery">Gallery</Link></p>
                <p><Link className="navLinks" to="/EmailForm">Contact</Link></p>
                <p><Link className="navLinks" to="/">Home</Link></p>
            <Link to="/">
                <img className="logoLink" src="./pics/TruckLogo.png" alt="logo"></img>
            </Link>
            <h1 className="title">BJG Trucking</h1>
        </nav>
        </header>
    )
}