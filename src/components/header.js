import React, { Component } from "react"
import { HashLink as Link } from "react-router-hash-link"

class Header extends Component {
  render() {
    return <div className="header-container">
      <header>
        <Link to="/">LOTTE garden</Link>
      </header>
    </div>
  }
}

export default Header