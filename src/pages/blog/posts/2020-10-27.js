import Layout from "../../../components/layout"
import React from "react"
import {PostLayout} from "../../../components/blog/postLayout";
import {posts} from "./posts";

const Post01 = () => (
    <Layout>
        {posts.map((posts, i) => <PostLayout posts={posts} index={i} key={i}/>)}
    </Layout>
)

export default Post01
