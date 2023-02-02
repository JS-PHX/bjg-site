import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <header>
        <nav className="navbar">
                <h2><Link to="/gallery">Gallery</Link></h2>
                <h2><Link to="/EmailForm">Contact</Link></h2>
                <h2><Link to="/">Home</Link></h2>
            <img className="logo" src="./pics/TruckLogo.png" alt="logo"></img>
            <h1 className="title">BJG Trucking</h1>
        </nav>
        </header>
    )
}