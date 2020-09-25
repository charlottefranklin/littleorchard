import React from "react"

export function VegDisplay(props) {
    return (
        <ul key={props.index + "grower"}>
            <li key={props.index + "name"}>{props.grower.name}</li>
            <li key={props.index + "url"}><a href={props.grower.url}>{props.grower.url}</a></li>
        </ul>
    )
}

export function FruitDisplay(props) {
    return (
        <ul key={props.index + "grower"}>
            <li key={props.index + "name"}>{props.grower.name}</li>
            <li key={props.index + "url"}><a href={props.grower.url}>{props.grower.url}</a></li>
        </ul>
    )
}

export function EquipmentDisplay(props) {
    return (
        <ul key={props.index + "seller"}>
            <li key={props.index + "name"}>{props.seller.name}</li>
            <li key={props.index + "url"}><a href={props.seller.url}>{props.seller.url}</a></li>
        </ul>
    )
}
