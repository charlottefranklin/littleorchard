import React from "react";
import {Link} from "react-router-dom";

export default function KitchenNavigation() {
    return (
        <nav>
            <ul>
                <li><Link to="pizza">Spelt pizza dough</Link></li>
                <li><Link to="cake-cardamom">Cardamom and banana cake</Link></li>
            </ul>
        </nav>
    )
}
