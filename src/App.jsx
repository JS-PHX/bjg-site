
import Nav from "./components/nav"
import Home from "./components/main"
import Footer from "./components/footer"
import { BrowserRouter, Route } from 'react-router-dom'

export default function App(){
    return (
        <div>
         <Nav />
            <BrowserRouter> 
                <Route>
                    <Route path="/" element={<Home />} exact/>
                </Route>
            </BrowserRouter> 
         <Footer />
        </div>
    )
}