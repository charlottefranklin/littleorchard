import React from "react";
import {HashRouter} from "react-router-dom";
import Post01 from "../../pages/blog/posts/2020-10-27";
import Post02 from "../../pages/blog/posts/2020-11-02";
import {HashLink as Link} from "react-router-hash-link";

export default function BlogNavigation() {
    return (
        <>
            <HashRouter basename={"/blog"}/>
            <Link to="/2020-10-27/" component={Post01}>Post</Link>
            <Link to="/2020-11-02/" component={Post02}>Post</Link>
        </>
    )
}
