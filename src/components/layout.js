import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Garden from "./navigation/garden"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Garden/>
      <main>{children}</main>
        <footer><article className="footer-content">
          © {new Date().getFullYear()} Little Orchard
        </article>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
