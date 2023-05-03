import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <header>
        <nav class="navbar">
                <p><Link class="navLinks" to="/gallery">Gallery</Link></p>
                <p><Link class="navLinks" to="/EmailForm">Contact</Link></p>
                <p><Link class="navLinks" to="/">Home</Link></p>
            <Link to="/">
                <img class="logoLink" src="./pics/TruckLogo.png" alt="logo"></img>
            </Link>
            <h1 class="title">BJG Trucking</h1>
        </nav>
        </header>
    )
}