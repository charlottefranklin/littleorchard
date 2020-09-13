import React from "react"
import {calendarData} from "./data";

function formatVegList(month, seedType) {
    return month + "-seeds-veg";
}

function formatFlowerList(month) {
    return month + "-seeds-flower";
}

export function SeedsDisplay(props) {
    return <article>
        <h2 className="title-case">{props.month}</h2>
        <h3>Vegetables</h3><ul>{calendarData[formatVegList(props.month)].map((item, i) => { return <li key={i}>{item.seed}</li> })}</ul>
        <h3>Flowers</h3><ul>{calendarData[formatFlowerList(props.month)].map((item, i) => { return <li key={i}>{item.seed}</li> })}</ul>
    </article>;
}
