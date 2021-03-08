import React from "react"

export function BookmarkDisplay(props) {
    return (
        <ul>
            <li>{props.bookmark.name}</li>
            <li className={"strip-bullet"}><a href={props.bookmark.url} target={"_blank"} rel="noopener noreferrer">www</a></li>
        </ul>
    )
}
