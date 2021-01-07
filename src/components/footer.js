import React from "react";

export const Footer = () => {
    return (
        <footer>
            <article className="footer-content">
                © {new Date().getFullYear()} Little Orchard
            </article>
        </footer>
    )
}
