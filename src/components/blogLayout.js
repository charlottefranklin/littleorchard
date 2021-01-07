import React from "react"
import BlogNavigation from "./navigation/blogNavigation";

const BlogLayout = ({children}) => {
    return (
        <>
            <BlogNavigation/>
            <main>{children}</main>
        </>
    )
}

export default BlogLayout
