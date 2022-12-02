
import Nav from "./components/nav"
import Home from "./components/main"
import Footer from "./components/footer"
import {Route, Link} from "react-router-dom"

export default function App(){
    return (
        <div>
            <Nav />
            <Route index element={<Home />} />

            {/* <Home /> */}
            <Footer />
        </div>
    )
}