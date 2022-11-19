
import Nav from "./components/nav"
import Home from "./components/main"
import Phone from "./components/contact" 
import Footer from "./components/footer"

export default function App(){
    return (
        <div>
            <Nav />
            <Home />
            {/* <Phone /> */}
            <Footer />
        </div>
    )
}