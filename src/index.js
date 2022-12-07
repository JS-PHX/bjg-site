import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.render(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
