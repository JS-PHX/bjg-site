import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <header>
        <nav className="navbar">
                <h2><Link className="navLinks" to="/gallery">Gallery</Link></h2>
                <h2><Link className="navLinks" to="/EmailForm">Contact</Link></h2>
                <h2><Link className="navLinks" to="/">Home</Link></h2>
            <Link to="/">
                <img className="logoLink" src="./pics/TruckLogo.png" alt="logo"></img>
            </Link>
            <h1 className="title">BJG Trucking</h1>
        </nav>
        </header>
    )
}