import React, {Component} from "react"
import PhotoLayout from "./components/photoLayout"
import {Route, HashRouter} from "react-router-dom"
import './App.scss'

import SowingCalendarPage from "./pages/garden/sowing-calendar"
import LinksPage from "./pages/garden/links";
import BreadPage from "./pages/recipes/bread"
import PizzaPage from "./pages/recipes/pizza"
import SourdoughNoKneadPage from "./pages/recipes/sourdough-no-knead"

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={Main}/>
                <Route path="/pages/garden/links/" component={LinksPage}/>
                <Route path="/pages/garden/sowing-calendar/" component={SowingCalendarPage}/>
                <Route path="/pages/recipes/bread/" component={BreadPage}/>
                <Route path="/pages/recipes/pizza/" component={PizzaPage}/>
                <Route path="/pages/recipes/sourdough-no-knead/" component={SourdoughNoKneadPage}/>
            </HashRouter>
        )
    }
}

function Main() {
    return <PhotoLayout>
        <section><h1>A New Zealand home gardener's notebook</h1></section>
    </PhotoLayout>
}

export default App


