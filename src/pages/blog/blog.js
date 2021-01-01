import React from "react"
import Layout from "../../components/layout";
import BlogNavigation from "../../components/navigation/blogNavigation";

const BlogPage = () => {
    return(
        <Layout>
            <h1>Blog</h1>
            <BlogNavigation/>
        </Layout>
    );
};

export default BlogPage
