import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Garden from "./navigation/garden"
import Recipes from "./navigation/recipes"

const photoLayout = ({ children }) => {
  return (
    <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap');
        </style>
      <Header/>
        <nav>
            <ul>
            <Garden/>
            <Recipes/>
            </ul>
        </nav>
      <main className={"main-full-width"}>
          <>{children}</>
      </main>
        <footer><article className="footer-content">
          © {new Date().getFullYear()} Little Orchard
        </article>
        </footer>
    </>
  )
}

photoLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default photoLayout
