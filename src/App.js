import React from "react"
import {Route, HashRouter} from "react-router-dom"
import './App.scss'

import GardenPage from "./pages/garden/garden";
import KitchenPage from "./pages/kitchen/kitchen";
import ShopPage from "./pages/shop/shop";
import BlogPage from "./pages/blog/blog";
import PhotoLayout from "./components/photoLayout"
import garden from "./images/IMG_0804-1.jpg";

function Main() {
    return <PhotoLayout>
        <section><h1>A New Zealand home gardener's notebook</h1></section>
        <img src={garden} alt="Koanga poppies"/>
    </PhotoLayout>
}

export default function App() {
    return (
        <HashRouter>
            <Route path="/" exact component={Main}/>
            <Route path="/blog/" component={BlogPage}/>
            <Route path="/shop/" component={ShopPage}/>
            <Route path="/garden/" component={GardenPage}/>
            <Route path="/kitchen/" component={KitchenPage}/>
        </HashRouter>
    );
}
