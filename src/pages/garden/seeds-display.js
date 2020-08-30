import React from "react"
import {calendarData} from "./data";

function formatVegList(month, seedType) {
    return month + "-seeds-veg";
}

function formatFlowerList(month) {
    return month + "-seeds-flower";
}

export function SeedsDisplay(props) {
    return <div><h2>{props.month}</h2>
        <h3>Vegetables</h3>{calendarData[formatVegList(props.month)].map((item, i) => { return <div key={i}>{item.seed}</div> })}
        <h3>Flowers</h3>{calendarData[formatFlowerList(props.month)].map((item, i) => { return <div key={i}>{item.seed}</div> })}
    </div>;
}
