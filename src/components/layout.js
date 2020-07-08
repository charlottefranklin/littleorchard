import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Navigation/>
      <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} lottegarden
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
