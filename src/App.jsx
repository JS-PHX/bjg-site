
import Nav from "./components/nav"
import ContactUs from "./components/EmailForm"
import Home from "./components/home"
import Footer from "./components/footer"
import { Routes, Route } from 'react-router-dom'

export default function App(){
    return (
        <>
            <Nav />

        <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/EmailForm" element={<ContactUs />} />
                </Routes>
        </div>
        <Footer />

        </>
    )
}