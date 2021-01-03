import React from "react"
import {posts} from "../../pages/blog/posts/posts";

const PostLayout = () => (
    <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.date}</p>
        <img src={this.props.imageMain} alt={this.props.imageMainAlt}/>
        <p>{this.props.text}</p>
        <div>
            { posts.map((post) => {
                return (
                    <div key={this.props.index + "imageAlt"}>
                        {post.images.map((image, i) => {return (<img src={image.imageUrl} alt={image.imageAlt} key={i}/>);})
                        }
                    </div>
                );
            })
            }
        </div>
    </article>
)

export default PostLayout;
