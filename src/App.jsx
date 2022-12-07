
// import Nav from "./components/nav"
import Home from "./components/home"
// import Footer from "./components/footer"
import { Routes, Route } from 'react-router-dom'

export default function App(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>

        // <div>
        //  <Nav />
        //  <Footer />
        // </div>
    )
}