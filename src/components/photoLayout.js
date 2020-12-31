import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Garden from "./navigation/garden"
import Recipes from "./navigation/recipes"
import garden from "../images/IMG_0806-1.jpg";

const photoLayout = ({ children }) => {
  return (
    <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap');
        </style>
      <Header/>
        <nav>
            <ul className={"flex-group flex-start"}>
            <Garden/>
            <Recipes/>
            </ul>
        </nav>
      <main className={"main-full-width"}>
          <>{children}</>
          <img src={garden} alt="Early spring garden courgette"/>
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
