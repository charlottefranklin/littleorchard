import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/navigation"

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Navigation/>
            <main>{children}</main>
            <footer>
                <article className="footer-content">
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
