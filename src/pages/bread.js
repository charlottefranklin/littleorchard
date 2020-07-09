import React from "react"

import Layout from "../components/layout"
import bread from "../images/bread.jpg"

const BreadPage = () => (
    <Layout>

        <h1>Bread - sort of milk loaf</h1>
        <img src={bread} alt="Two loaves of bread"/>

        <em>Makes 2 loaves. I use two of <a
            href="https://www.falconenamelware.com/collections/all/products/loaf-tin?variant=30384542056484" target="_blank">these loaf tins</a> from
            Falcon Enamelware</em>
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
        <p>Mix in flour and salt then add the milk and mix with a small wooden spoon.</p>
        <p>Once the mixture has come together knead the bread for a couple of minutes by hand. I seem to get away with very little kneading for this bread.</p>
        <p>Cover with a tea towel and put in a warm place for an hour or so to rise.</p>
        <p>When the dough has risen gently push down and knead a couple of times to release the gases. </p>
        <p>Cut the dough into two and, on a floured surface, shape each piece to fit your tins.</p>
        <p>Line the two loaf tins and put your shaped loaves into them. Put these back in your warm place to rise again for a
            further half hour.</p>
        <p>Meanwhile, pre-heat oven to 180 deg C. Or 200 deg C if you have a slow oven.</p>
        <p>Bake the loaves for 30 to 40 minutes until golden brown. Remove from tins and allow to cool on a wooden breadboard or wire rack. The bread should sound hollow when you tap the base.</p>
        <p>Allow to cool for at least twenty minutes before slicing any bread as this allows the bread to finish its
            baking process.</p>
    </Layout>
)

export default BreadPage