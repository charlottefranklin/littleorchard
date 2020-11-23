import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Garden from "./navigation/garden"
import Recipes from "./navigation/recipes"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <nav>
            <ul className={"flex-group flex-start"}>
            <Garden/>
            <Recipes/>
            </ul>
        </nav>
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
