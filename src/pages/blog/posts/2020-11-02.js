import React from "react"
import {posts} from "./posts";
import {PostLayout} from "../../../components/blog/postLayout";
import Layout from "../../../components/layout";

const Post02 = () => (
    <Layout>
        {posts.map((posts, i) => <PostLayout posts={posts} index={i} key={i}/>)}
    </Layout>
)

export default Post02
