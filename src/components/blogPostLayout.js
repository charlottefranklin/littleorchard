import React from "react"

export function BlogPostLayout(props) {
    return (
        <article>
            <h1>{props.post.title}</h1>
            <p>{props.post.date}</p>
            <p>{props.post.text}</p>
            <div>{props.post.images.map((image, i) => <img src={image.imageUrl} alt={image.imageAlt} key={i}/>)}
            </div>
        </article>
    )
}

export default BlogPostLayout
