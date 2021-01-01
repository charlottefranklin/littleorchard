import React from "react"
import {HashLink as Link} from "react-router-hash-link"

export default function BlogNavigation() {
    return(
        <nav>
            <ul>
                <li><Link to="/pages/blog/blog/">Post 1</Link></li>
                <li><Link to="/pages/shop/shop/">Post 2</Link></li>
            </ul>
        </nav>
    )
}
