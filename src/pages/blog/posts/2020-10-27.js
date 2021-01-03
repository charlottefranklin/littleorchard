import React from "react"
import {post} from "./post01";
import Layout from "../../../components/layout";
import PostLayout from "../../../components/blog/postLayout";

const Post01 = () => (
    <Layout>
        { post.map((post, i)=> <PostLayout post={post} key={i}/> )}
    </Layout>
)

export default Post01
