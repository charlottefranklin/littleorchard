import React from "react"
import BlogLayout from "../../components/blogLayout";
import {Outlet} from "react-router";

const Blog = () => {

    return (
        <BlogLayout>
            <Outlet />
        </BlogLayout>
    );
};

export default Blog
