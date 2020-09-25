import React, { Component } from "react"
import "./styles/lotte.scss"
import Layout from "./components/layout"
import { Route, HashRouter } from "react-router-dom"

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

  </Layout>
}

export default App


