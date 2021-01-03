import React from "react"
import Header from "./header"
import Navigation from "./navigation/navigation"
import BlogNavigation from "./navigation/blogNavigation";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Navigation/>
            <BlogNavigation/>

            <main>{children}</main>
            <footer>
                <article className="footer-content">
                    © {new Date().getFullYear()} Little Orchard
                </article>
            </footer>
        </>
    )
}

export default Layout
