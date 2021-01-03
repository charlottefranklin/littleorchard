import React from "react"
import Layout from "../../components/layout";
import {posts} from "./posts/posts";

const BlogPage = () => {

    return (
        <Layout>
            <div>
                {posts
                    .map(post => <article key={post.date}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <img src={post.imageMain} alt={post.imageMainAlt}></img>
                    <p>{post.snippet}</p>
                </article>)
                }
            </div>
        </Layout>
    );
};

export default BlogPage

