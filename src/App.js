import React, { Component } from "react"
import "./styles/lotte.scss"
import Layout from "./components/layout"
import { Route, HashRouter } from "react-router-dom"

import BreadPage from "./pages/bread"
import CakePage from "./pages/cake"
import CardamomCakePage from "./pages/cake-cardamom"
import CremeFraichePage from "./pages/creme-fraiche"
import PizzaPage from "./pages/pizza"
import LeekPage from "./pages/soup-leek"
import LabnehPage from "./pages/labneh"
import PastryPage from "./pages/pastry"
import PizzaSourdoughPage from "./pages/pizza-sourdough"
import WaterKefirPage from "./pages/water-kefir"
import LemonTartPage from "./pages/lemon-tart"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Main}/>
        <Route path="/pages/bread/" component={BreadPage}/>
        <Route path="/pages/cake-cardamom/" component={CardamomCakePage}/>
        <Route path="/pages/cake-raspberry/" component={CakePage}/>
        <Route path="/pages/creme-fraiche/" component={CremeFraichePage}/>
        <Route path="/pages/labneh/" component={LabnehPage}/>
        <Route path="/pages/lemon-tart/" component={LemonTartPage}/>
        <Route path="/pages/water-kefir/" component={WaterKefirPage}/>
        <Route path="/pages/soup-leek-potato/" component={LeekPage}/>
        <Route path="/pages/pastry/" component={PastryPage}/>
        <Route path="/pages/pizza/" component={PizzaPage}/>
        <Route path="/pages/pizza-sourdough/" component={PizzaSourdoughPage}/>
      </HashRouter>
    )
  }
}

function Main() {
  return <body>
    <Layout>
    </Layout>
  </body>
}

export default App
