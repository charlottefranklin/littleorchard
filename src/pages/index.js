import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import "../styles/lotte.scss"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h2>Garden</h2>
    <ul>
      <li><Link to="/sowing-calendar/">Sowing calendar - NZ</Link></li>
    </ul>
    <h2>Food</h2>
    <ul>
      <li><Link to="/bread/">Bread</Link></li>
      <li><Link to="/cake-cardamom/">Cardamon cake</Link></li>
      <li><Link to="/cake-raspberry/">Raspberry cake</Link></li>
      <li><Link to="/creme-fraiche/">Creme fraiche</Link></li>
      <li><Link to="/labneh/">Labneh</Link></li>
      <li><Link to="/water-kefir/">Water kefir</Link></li>
      <li><Link to="/soup-leek-potato/">Leek and potato soup</Link></li>
      <li><Link to="/pastry/">Pastry</Link></li>
      <li><Link to="/pizza/">Pizza</Link></li>
      <li><Link to="/pizza-sourdough/">Sourdough pizza</Link></li>
    </ul>
    <h2>Maths</h2>
    <ul>
      <li>Algebra</li>
      <li>Indices</li>
      <li>Surds</li>
      <li>Triginometry</li>
      <li>Vectors</li>
    </ul>
    <h2>Data science</h2>
    <ul>
      <li>Basics</li>
    </ul>
    <h2>Software design</h2>
    <ul>
      <li>Consumers of software design</li>
      <li>UX rules</li>
    </ul>
  </Layout>
)

export default IndexPage
