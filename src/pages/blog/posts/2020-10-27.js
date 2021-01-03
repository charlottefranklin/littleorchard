import React from "react"
import {post01} from "./post01";
import Layout from "../../../components/layout";
import PostLayout from "../../../components/blog/postLayout";

const Post01 = () => (
    <Layout>
        <h1>Post 1</h1>
        <PostLayout post01={post01}/>)}
    </Layout>
)

export default Post01
