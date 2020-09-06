import React, { Component } from "react"
import { HashLink as Link } from "react-router-hash-link"

class Navigation extends Component {
  render() {
    return <nav>
      <section className="flex-group flex-start">
        <article>
          <h2>Garden</h2>
          <ul>
            <li><Link to="/pages/garden/biodynamics/">Biodynamics</Link></li>
            <li><Link to="/pages/garden/growing-from-seed/">Growing from seed</Link></li>
            <li><Link to="/pages/garden/sowing-calendar/">Sowing calendar - NZ</Link></li>
          </ul>
        </article>
        <article>
          <h2>Food</h2>
          <ul>
            <li><Link to="/pages/bread/">Bread</Link></li>
            <li><Link to="/pages/cake-cardamom/">Cardamon cake</Link></li>
            <li><Link to="/pages/cake-raspberry/">Raspberry cake</Link></li>
            <li><Link to="/pages/creme-fraiche/">Creme fraiche</Link></li>
            <li><Link to="/pages/labneh/">Labneh</Link></li>
            <li><Link to="/pages/water-kefir/">Water kefir</Link></li>
            <li><Link to="/pages/soup-leek-potato/">Leek and potato soup</Link></li>
            <li><Link to="/pages/lemon-tart/">River Cafe lemon tart</Link></li>
            <li><Link to="/pages/scone$/">Scones</Link></li>
            <li><Link to="/pages/pastry/">Pastry</Link></li>
            <li><Link to="/pages/pizza/">Pizza</Link></li>
            <li><Link to="/pages/pizza-sourdough/">Sourdough pizza</Link></li>
          </ul>
        </article>
      </section>
    </nav>
  }
}

export default Navigation
