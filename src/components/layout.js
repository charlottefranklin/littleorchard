import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <main>
      <Header/>
      <Navigation/>
      <section>{children}</section>
        <footer>
          © {new Date().getFullYear()} lottegarden
        </footer>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
