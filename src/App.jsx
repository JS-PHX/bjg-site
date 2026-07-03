
import Nav from "./components/nav"
import MobileNav from "./components/mobileNav"
// import ContactUs from "./components/EmailForm"
// import Home from "./components/home"
// import Gallery from "./components/gallery"
import Footer from "./components/footer"
// import { Routes, Route } from 'react-router-dom'
import AnimatedRoutes from "./components/AnimatedRoutes"

export default function App(){
  return (
    <div className="app-wrapper">
      <Nav />
      <MobileNav />
      <div className="app-content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  )
}