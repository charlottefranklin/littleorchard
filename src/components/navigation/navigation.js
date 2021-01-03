import React from "react"
import {HashLink as Link} from "react-router-hash-link"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/blog/">Blog</Link></li>
                <li><Link to="/shop/">Shop</Link></li>
                <li><Link to="/garden/">Garden</Link></li>
                <li><Link to="/kitchen/">Kitchen</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation
