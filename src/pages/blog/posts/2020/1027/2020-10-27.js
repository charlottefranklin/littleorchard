import React from "react"
import {post} from "./post";
import PostLayout from "../../../../../components/blogPostLayout";

const Post01 = () => (
    <>
        { post.map((post, i)=> <PostLayout post={post} key={i}/> )}
    </>
)

export default Post01
