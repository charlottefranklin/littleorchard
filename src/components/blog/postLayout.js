import React from "react"
import {posts} from "../../pages/blog/posts/posts";

export function PostLayout(props) {
    return (
        <article>
            <h2>{props.posts.title}</h2>
            <p>{props.posts.date}</p>
            <img src={props.posts.imageMain} alt={props.posts.imageMainAlt}></img>
            <p>{props.posts.text}</p>
            <div>
                { posts.map((post) => {
                        return (
                            <div key={props.index + "imageAlt"}>
                                {post.images.map((image, i) => {return (<img src={image.imageUrl} alt={image.imageAlt} key={i}/>);})
                                }
                            </div>
                        );
                    })
                }
            </div>
        </article>
    )
}
