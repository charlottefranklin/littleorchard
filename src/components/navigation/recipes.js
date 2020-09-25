import {HashLink as Link} from "react-router-hash-link";
import React, {Component} from "react";
import Garden from "./garden";

class RecipesNavigation extends Component {
    render() {
        return <article>
            <h2>Recipes</h2>
            <nav>
                <ul>
                    <li><Link to="/pages/bread/">Bread</Link></li>
                    <li><Link to="/pages/cake-cardamom/">Cardamon cake</Link></li>
                    <li><Link to="/pages/cake-raspberry/">Raspberry cake</Link></li>
                    {/*<li><Link to="/pages/creme-fraiche/">Creme fraiche</Link></li>*/}
                    {/*<li><Link to="/pages/labneh/">Labneh</Link></li>*/}
                    {/*<li><Link to="/pages/water-kefir/">Water kefir</Link></li>*/}
                    {/*<li><Link to="/pages/soup-leek-potato/">Leek and potato soup</Link></li>*/}
                    {/*<li><Link to="/pages/lemon-tart/">River Cafe lemon tart</Link></li>*/}
                    {/*<li><Link to="/pages/scone$/">Scones</Link></li>*/}
                    {/*<li><Link to="/pages/pastry/">Pastry</Link></li>*/}
                    <li><Link to="/pages/pizza/">Pizza</Link></li>
                    {/*<li><Link to="/pages/pizza-sourdough/">Sourdough pizza</Link></li>*/}
                </ul>
            </nav>
        </article>
    }
}


export default RecipesNavigation
