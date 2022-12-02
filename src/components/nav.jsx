import { Link } from "react-router-dom";
import {ContactUs} from "./components/EmailForm"

export default function Nav(){
    return (
        <header>
        <nav className="navbar">
                <h2><Link to="/">Gallery</Link></h2>
                <h2><Link to="/ContactUs">Contact</Link></h2>
                <h2><Link to="/">Home</Link></h2>
                {/* <h2><a href="index.html">Gallery</a></h2>
                <h2><a href="index.html">Contact</a></h2>
                <h2><a href="index.html">Home</a></h2> */}
            <img className="logo" src="./pics/TruckLogo.png" alt="logo"></img>
            <h1 className="title">BJG Trucking</h1>
        </nav>
        </header>
    )
}