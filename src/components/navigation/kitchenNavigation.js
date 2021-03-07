import React from "react";
import {Link} from "react-router-dom";

export default function BlogNavigation() {
    return (
        <nav>
            <ul>
                <li><Link to="01">Back in NZ</Link></li>
                <li><Link to="02">The cats can go out</Link></li>
            </ul>
        </nav>
    )
}
