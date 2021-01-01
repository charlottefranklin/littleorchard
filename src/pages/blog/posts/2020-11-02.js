import Layout from "../../../components/layout"
import React from "react"
import {PostLayout} from "../../../components/blog/postLayout";
import {posts} from "./posts";

const Post02 = () => (
    <Layout>
        {posts.map((posts, i) => <PostLayout posts={posts} index={i} key={i}/>)}
    </Layout>
)

export default Post02
