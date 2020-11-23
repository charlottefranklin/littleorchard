import {HashLink as Link} from "react-router-hash-link";
import React, {Component} from "react";

class RecipesNavigation extends Component {
    render() {
        return <>
                    <li><Link to="/pages/recipes/bread/">Bread</Link></li>
                    <li><Link to="/pages/recipes/pizza/">Pizza</Link></li>
                    <li><Link to="/pages/recipes/sourdough-no-knead/">No-knead sourdough</Link></li>
                    {/*<li><Link to="/pages/cake-cardamom/">Cardamon cake</Link></li>*/}
                    {/*<li><Link to="/pages/cake-raspberry/">Raspberry cake</Link></li>*/}
                    {/*<li><Link to="/pages/creme-fraiche/">Creme fraiche</Link></li>*/}
                    {/*<li><Link to="/pages/labneh/">Labneh</Link></li>*/}
                    {/*<li><Link to="/pages/water-kefir/">Water kefir</Link></li>*/}
                    {/*<li><Link to="/pages/soup-leek-potato/">Leek and potato soup</Link></li>*/}
                    {/*<li><Link to="/pages/lemon-tart/">River Cafe lemon tart</Link></li>*/}
                    {/*<li><Link to="/pages/scone$/">Scones</Link></li>*/}
                    {/*<li><Link to="/pages/pastry/">Pastry</Link></li>*/}
                    {/*<li><Link to="/pages/pizza-sourdough/">Sourdough pizza</Link></li>*/}
        </>
    }
}


export default RecipesNavigation
