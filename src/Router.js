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
import Algorithms from "./pages/Algorithms/Algorithms";
import DataScience from "./pages/DataScience/DataScience";
import MathematicsPage from "./pages/Mathematics/Mathematics";
import Security from "./pages/Security/Security";
import Writing from "./pages/Writing/Writing";
import InteractionDesign from "./pages/InteractionDesign/InteractionDesign";
import KitchenIndex from "./pages/kitchen/kitchenindex";
import PizzaPage from "./pages/kitchen/recipes/pizza/pizza";
import CardamomCakePage from "./pages/kitchen/recipes/cake-cardamom/cake-cardamom";

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
            <Route path="kitchen" element={<KitchenPage/>}>
                <Route path="/" element={<KitchenIndex/>}/>
                <Route path="recipes/pizza/pizza" element={<PizzaPage/>}/>
                <Route path="recipes/cake-cardamon/cake-cardamon" element={<CardamomCakePage/>}/>
            </Route>
            <Route path="algorithms" element={<Algorithms/>}/>
            <Route path="data-science" element={<DataScience/>}/>
            <Route path="mathematics" element={<MathematicsPage/>}/>
            <Route path="security" element={<Security/>}/>
            <Route path="interaction-design" element={<InteractionDesign/>}/>
            <Route path="writing" element={<Writing/>}/>
        </Routes>
    );
}
