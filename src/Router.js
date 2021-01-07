import React from "react";
import {Switch, Route} from "react-router-dom";

import {SiteIndex} from "./pages/siteIndex";
import BlogIndex from "./pages/blog/blogIndex";
import ShopPage from "./pages/shop/shop";
import GardenPage from "./pages/garden/garden";
import KitchenPage from "./pages/kitchen/kitchen";
import Post01 from "./pages/blog/posts/2020/1027/2020-10-27";
import Post02 from "./pages/blog/posts/2020/1102/2020-11-02";

export const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={SiteIndex}/>
            <Route path="/blog/" component={BlogIndex}>
                <Route path="/" component={BlogIndex}/>
                <Route path="/01" component={Post01}/>
                <Route path="/02" component={Post02}/>
            </Route>
            <Route path="/shop/" component={ShopPage}/>
            <Route path="/garden/" component={GardenPage}/>
            <Route path="/kitchen/" component={KitchenPage}/>
        </Switch>
    );
}
