import React, { Component } from "react"
import { HashLink as Link } from "react-router-hash-link"

class Header extends Component {
  render() {
    return <header>
      <div  className="header-content">
        <Link to="/">Pentacle ~ Ephemeris</Link>
      </div>
    </header>
  }
}

export default Header
