import React from "react"

export function PostsLayout(props) {
    return (
        <article>
            <h2>{props.post.title}</h2>
            <p>{props.post.date}</p>
            <p>{props.post.text}</p>
            <div>{props.post.images.map((image, i) => <img src={image.imageUrl} alt={image.imageAlt} key={i}/>)}
            </div>
        </article>
    )
}

export default PostsLayout
