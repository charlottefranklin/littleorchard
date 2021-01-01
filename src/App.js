import React, {Component} from "react"
import PhotoLayout from "./components/photoLayout"
import {Route, HashRouter} from "react-router-dom"
import './App.scss'
import garden from "./images/IMG_0804-1.jpg";

import SowingCalendarPage from "./pages/garden/sowing-calendar"
import GardenPage from "./pages/garden/garden";
import KitchenPage from "./pages/kitchen/kitchen";
import ShopPage from "./pages/shop/shop";
import BlogPage from "./pages/blog/blog";
import LinksPage from "./pages/garden/links";

import BreadPage from "./pages/recipes/bread"
import PizzaPage from "./pages/recipes/pizza"
import SourdoughNoKneadPage from "./pages/recipes/sourdough-no-knead"
import Post01 from "./pages/blog/posts/2020-10-27";
import Post02 from "./pages/blog/posts/2020-11-02";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={Main}/>
                <Route path="/blog/" component={BlogPage}/>
                <Route path="/shop/" component={ShopPage}/>
                <Route path="/garden/" component={GardenPage}/>
                <Route path="/kitchen/" component={KitchenPage}/>

                <Route path="/pages/blog/posts/2020-10-27/" component={Post01}/>
                <Route path="/pages/blog/posts/2020-11-02/" component={Post02}/>

                <Route path="/pages/garden/links/" component={LinksPage}/>
                <Route path="/pages/garden/sowing-calendar/" component={SowingCalendarPage}/>
                <Route path="/pages/recipes/bread/" component={BreadPage}/>
                <Route path="/pages/recipes/pizza/" component={PizzaPage}/>
                <Route path="/pages/recipes/sourdough-no-knead/" component={SourdoughNoKneadPage}/>

            </HashRouter>
        )
    }
}

function Main() {
    return <PhotoLayout>
        <section><h1>A New Zealand home gardener's notebook</h1></section>
        <img src={garden} alt="Koanga poppies"/>
    </PhotoLayout>
}

export default App
