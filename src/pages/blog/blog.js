import React, {Component} from "react"
import Layout from "../../components/layout";
import BlogNavigation from "../../components/navigation/blogNavigation";
import {posts} from "./posts/posts";

const BlogPage = () => {

    // const greeting = 'welcome to react'
    // const user = { name: 'Robin' };
    // const Greeting = props => <h1>{props.greeting} {user.name}</h1>

    // const posts = [
    //     { name: 'postA', isSelected: true },
    //     { name: 'postB', isSelected: false },
    // ];

    return (
        <Layout>
            <BlogNavigation/>
            {/*<Greeting greeting = {greeting}/>*/}
            <div>
                { posts
                    .map(post => <article>
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                        <img src={post.imageMain} alt={post.imageMainAlt}></img>
                        <p>{post.text}</p>
                        {/*<div>*/}
                        {/*    { posts.map((post) => {*/}
                        {/*        return (*/}
                        {/*            <div key={"imageAlt"}>*/}
                        {/*                {post.images.map((image, i) => {return (<img src={image.imageUrl} alt={image.imageAlt} key={i}/>);})*/}
                        {/*                }*/}
                        {/*            </div>*/}
                        {/*        );*/}
                        {/*    })*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </article>)
                }
            </div>
        </Layout>
    );
};

export default BlogPage
