import React from "react"
import {PostLayout} from "../../../components/blog/postLayout";
import {posts} from "./posts";

export default function Post02() {
   return(
        <PostLayout>
            Post 02
            {posts.map((posts, i) => <PostLayout posts={posts} index={i} key={i}/>)}
        </PostLayout>
    );
}
