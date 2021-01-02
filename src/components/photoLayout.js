import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/navigation";

const photoLayout = ({children}) => {
    return (
        <>
            <Header/>
            <Navigation/>
            <main className={"main-full-width"}>
                <>{children}</>
            </main>
            <footer>
                <article className="footer-content">
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
