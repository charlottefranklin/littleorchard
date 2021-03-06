import React from "react"
import {post} from "./post";
import PostLayout from "../../../../../components/blogPostLayout";

const Post01 = () => (
    <article>
        { post.map((post, i)=> <PostLayout post={post} key={i}/> )}
    </article>
)

export default Post01
