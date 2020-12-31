import React from "react"

export function VegDisplay(props) {
    return (
        <ul>
            <li>{props.grower.name}</li>
            <li>{props.grower.location}</li>
            <li><a href={props.grower.url} target={"_blank"} rel="noopener noreferrer">website</a></li>
        </ul>
    )
}

export function EquipmentDisplay(props) {
    return (
        <ul>
            <li>{props.seller.name}</li>
            <li>{props.seller.location}</li>
            <li><a href={props.seller.url}target={"_blank"} rel="noopener noreferrer">website</a></li>
        </ul>
    )
}
