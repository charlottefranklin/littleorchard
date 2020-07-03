import React from "react"

import Layout from "../components/layout"
import bread01 from "../images/IMG_4636.jpg"
import bread02 from "../images/IMG_4644.jpg"
import bread03 from "../images/IMG_4676.jpg"

const BreadPage = () => (
  <Layout>

    <h1>The daily bread</h1>
    <img src={bread01} alt="bread"/>

    <em>You will need two loaf tins to make 2 loaves</em>
    <h2>Ingredients</h2>
    <ul>
      <li>3 tsp yeast</li>
      <li>3 tbsp sugar</li>
      <li>600ml luke warm water</li>
      <li>1.5 tbsp salt</li>
      <li>8 cups white spelt flour</li>
      <li>1 cup milk</li>
    </ul>
    <p>In a large bowl mix water, yeast and sugar. Rest in a warm place for ten minutes until bubbly and yeasty
      smelling.</p>
    <p>Mix in flour and salt then add the milk and mix in the bowl.</p>
    <p>Knead the bread for five minutes-ish.</p>
    <img src={bread02} alt="bread"/>
    <p>Cover with a tea towel and put in a warm place for an hour or so to rise.</p>
    <p>When the dough has risen gently push down and knead a couple of times to release the gases. </p>
    <p>Break the dough into
      two and knead each piece on a floured surface and shape each into a loaf to fit your tins.</p>
    <p>Oil the two loaf tins and put your loaves into them. Put these back in your warm place to rise again for a
      further half hour.</p>
    <p>Meanwhile, pre-heat oven to 180 deg C. Or 200 deg C if you have a slow oven.</p>
    <p>Bake the loaves for 30 to 40 minutes until golden brown. Remove from tins and allow to
      cool on a wooden breadboard or wire rack. The bread should sound hollow when you tap the base.</p>
    <p>Allow to cool for at least twenty minutes before slicing any bread as this allows the bread to finish its baking
      process.</p>
    <img src={bread03} alt="bread"/>
  </Layout>
)

export default BreadPage