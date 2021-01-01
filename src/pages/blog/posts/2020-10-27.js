import React from "react"
import {PostLayout} from "../../../components/blog/postLayout";
import {posts} from "./posts";
import Layout from "../../../components/layout";

const Post01 = () => (
    <Layout>
        {posts.map((posts, i) => <PostLayout posts={posts} index={i} key={i}/>)}
    </Layout>
)

export default Post01
