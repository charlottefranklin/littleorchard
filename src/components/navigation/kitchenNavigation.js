import React from "react";
import {Link} from "react-router-dom";

export default function KitchenNavigation() {
    return (
        <nav>
            <ul>
                <li><Link to="pizza">Pizza</Link></li>
                <li><Link to="cake">Cake</Link></li>
            </ul>
        </nav>
    )
}
