import React, {Component} from "react"
import "./styles/lotte.scss"
import Layout from "./components/layout"
import {Route, HashRouter} from "react-router-dom"

import SowingCalendarPage from "./pages/garden/sowing-calendar"
import LinksPage from "./pages/garden/links";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={Main}/>
                <Route path="/pages/garden/links/" component={LinksPage}/>
                <Route path="/pages/garden/sowing-calendar/" component={SowingCalendarPage}/>
            </HashRouter>
        )
    }
}

function Main() {
    return <Layout>
        <section><h2>A notebook for the New Zealand home gardener.</h2></section>
        <img src="https://live.staticflickr.com/5568/14973505329_41cc90fb19_k.jpg" alt="Our Garden"/>
    </Layout>
}

export default App


