import React, {Component} from 'react';
import "./styles/lotte.scss"
import Layout from "./components/layout"
import { HashLink as Link } from "react-router-hash-link"
import { Route, HashRouter } from "react-router-dom"
import Navigation from "./components/navigation"
import PizzaPage from "./pages/pizza"
import CardamomCakePage from "./pages/cake-cardamom"
import CakePage from "./pages/cake"
import CremeFraichePage from "./pages/creme-fraiche"
import WaterKefirPage from "./pages/water-kefir"
import PizzaSourdoughPage from "./pages/pizza-sourdough"
import BreadPage from "./pages/bread"

class App extends Component {
  render() {
    return (
      <HashRouter>

        <Route path="/" exact component={Main}/>
        <Route path="/pages/bread/" component={BreadPage}/>
        <Route path="/pages/cake-cardamom/" component={CardamomCakePage}/>
        <Route path="/pages/cake-raspberry/" component={CakePage}/>
        <Route path="/pages/creme-fraiche/" component={CremeFraichePage}/>
        {/*<Route path="/pages/labneh/" component={LabnehPage}/>*/}
        <Route path="/pages/water-kefir/" component={WaterKefirPage}/>
        {/*<Route path="/pages/soup-leek-potato/" component={Leek}/>*/}
        {/*<Route path="/pages/pastry/" component={Pastry}/>*/}
        <Route path="/pages/pizza/" component={PizzaPage}/>
        <Route path="/pages/pizza-sourdough/" component={PizzaSourdoughPage}/>
      </HashRouter>
    )
  }
}

function Main() {
  return <main>
    <Navigation /> 
  </main>;
}

export default App
