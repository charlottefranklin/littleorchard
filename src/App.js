import React from "react"
import './App.scss'

import {BrowserRouter} from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation/navigation";
import {Router} from "./Router";
import {Footer} from "./components/footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navigation/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
