import React from "react";
import {HashLink as Link} from "react-router-hash-link";

export default function BlogNavigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/post-01/">Post 01</Link></li>
                <li><Link to="/post-02/">Post 02</Link></li>
            </ul>
        </nav>
    )
}
