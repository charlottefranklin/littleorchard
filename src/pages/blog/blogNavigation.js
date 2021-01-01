import React, {Component} from "react"
import {HashLink as Link} from "react-router-hash-link"

class BlogNavigation extends Component {
    render() {
        return <nav>
            <ul>
                <li><Link to="/pages/blog/blog/">Blog</Link></li>
                <li><Link to="/pages/shop/shop/">Shop</Link></li>
            </ul>
        </nav>
    }
}

export default BlogNavigation
