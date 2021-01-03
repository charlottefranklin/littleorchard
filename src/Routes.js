import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "./App";
import BlogPage from "./pages/blog/blog";
import ShopPage from "./pages/shop/shop";
import GardenPage from "./pages/garden/garden";
import KitchenPage from "./pages/kitchen/kitchen";
import Post01 from "./pages/blog/posts/2020-10-27";
import Post02 from "./pages/blog/posts/2020-11-02";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/blog/" component={BlogPage}/>
            <Route path="/shop/" component={ShopPage}/>
            <Route path="/garden/" component={GardenPage}/>
            <Route path="/kitchen/" component={KitchenPage}/>
            <Route path="/post-01/" component={Post01}/>
            <Route path="/post-02/" component={Post02}/>
        </Switch>
    );
}
