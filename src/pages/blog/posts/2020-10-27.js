import React from "react"
import {PostLayout} from "../../../components/blog/postLayout";
import {posts} from "./posts";

export default function Post01() {
    return(
        <PostLayout>
            Post 2
            {posts.map((posts, i) => <PostLayout posts={posts} index={i} key={i}/>)}
        </PostLayout>
    )
}
