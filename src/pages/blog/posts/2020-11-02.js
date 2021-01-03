import React from "react"
import {post} from "./post02";
import Layout from "../../../components/layout";
import PostLayout from "../../../components/blog/postLayout";

const Post02 = () => (
    <Layout>
        { post.map((post, i)=> <PostLayout post={post}/> )}
    </Layout>
)

export default Post02
