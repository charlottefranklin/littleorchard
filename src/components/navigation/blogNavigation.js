import React from "react";
import {Link} from "react-router-dom";

export default function BlogNavigation() {
    return (
        <nav>
            <ul>
                <li><Link to={"01"}>01</Link></li>
                <li><Link to={"02"}>02</Link></li>
            </ul>
        </nav>
    )
}
