import React from "react"
import BlogLayout from "../../components/blogLayout";
import {posts} from "./posts/posts";

const BlogIndex = () => {

    return (
        <BlogLayout>
            <section className={"flex-group flex-3"}>
                {posts
                    .map(post => <article key={post.date}>
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                        <img src={post.imageMain} alt={post.imageMainAlt}></img>
                        <p>{post.snippet}</p>
                    </article>)
                }
            </section>
        </BlogLayout>
    );
};

export default BlogIndex
