import React, { Component } from "react"
import "./styles/lotte.scss"
import Layout from "./components/layout"
import { Route, HashRouter } from "react-router-dom"

import SowingCalendarPage from "./pages/garden/sowing-calendar"
import BreadPage from "./pages/bread"
import CakePage from "./pages/cake"
import CardamomCakePage from "./pages/cake-cardamom"
import PizzaPage from "./pages/pizza"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Main}/>
        <Route path="/pages/garden/sowing-calendar/" component={SowingCalendarPage}/>

        <Route path="/pages/bread/" component={BreadPage}/>
        <Route path="/pages/cake-cardamom/" component={CardamomCakePage}/>
        <Route path="/pages/cake-raspberry/" component={CakePage}/>
        <Route path="/pages/pizza/" component={PizzaPage}/>
      </HashRouter>
    )
  }
}

function Main() {
  return <Layout>

  </Layout>
}

export default App


