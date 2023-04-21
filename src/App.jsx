
import Nav from "./components/nav"
// import ContactUs from "./components/EmailForm"
// import Home from "./components/home"
// import Gallery from "./components/gallery"
import Footer from "./components/footer"
// import { Routes, Route } from 'react-router-dom'
import AnimatedRoutes from "./components/AnimatedRoutes"
import mobileNav from "./components/mobileNav"

export default function App(){
    return (
        <>
            <Nav />
            <mobileNav />
        <div>
                <AnimatedRoutes />
        </div>
        <Footer />

        </>
    )
}