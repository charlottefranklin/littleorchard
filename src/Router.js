import React from "react";
import { Route, Routes } from "react-router";

import {SiteIndex} from "./pages/siteIndex";
import BlogIndex from "./pages/blog/blogIndex";
import ShopPage from "./pages/shop/shop";
import GardenPage from "./pages/garden/garden";
import KitchenPage from "./pages/kitchen/kitchen";
import Post01 from "./pages/blog/posts/2020/1027/2020-10-27";
import Post02 from "./pages/blog/posts/2020/1102/2020-11-02";
import Blog from "./pages/blog/blog";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<SiteIndex/>}/>
            <Route path="blog" element={<Blog/>}>
                <Route path="/" element={<BlogIndex/>}/>
                <Route path="01" element={<Post01/>}/>
                <Route path="02" element={<Post02/>}/>
            </Route>
            <Route path="shop" element={<ShopPage/>}/>
            <Route path="garden" element={<GardenPage/>}/>
            <Route path="kitchen" element={<KitchenPage/>}/>
        </Routes>
    );
}
