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
//
//
// import React from "react"
//
// export function VegDisplay(props) {
//     return (
//         <ul key={props.index + "grower"}>
//             <li key={props.index + "name"}>{props.grower.name}</li>
//             <li key={props.index + "location"}>{props.grower.location}</li>
//             <li key={props.index + "url"}><a href={props.grower.url} target={"_blank"} rel="noopener noreferrer">website</a></li>
//         </ul>
//     )
// }
//
// export function EquipmentDisplay(props) {
//     return (
//         <ul key={props.index + "seller"}>
//             <li key={props.index + "name"}>{props.seller.name}</li>
//             <li key={props.index + "location"}>{props.seller.location}</li>
//             <li key={props.index + "url"}><a href={props.seller.url}target={"_blank"} rel="noopener noreferrer">website</a></li>
//         </ul>
//     )
// }
