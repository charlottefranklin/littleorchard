import React from "react"

import PhotoLayout from "../../components/photoLayout"
import bread from "../../images/bread.jpg"

const BreadPage = () => (
    <PhotoLayout>
        <h1>Bread</h1>
        <img src={bread} alt="Two loaves of bread"/>
        <section>
            <em>Makes 2 loaves. I use two of <a
                href="https://www.falconenamelware.com/collections/all/products/loaf-tin?variant=30384542056484"
                target="_blank" rel="noopener noreferrer">these loaf tins</a> from
                Falcon Enamelware</em>
            <h2>Ingredients</h2>
            <ul>
                <li>3 tsp yeast</li>
                <li>3 tbsp sugar</li>
                <li>600ml luke warm water</li>
                <li>1.5 tbsp salt</li>
                <li>8 cups white spelt flour</li>
                <li>2 cups water</li>
            </ul>
            <p>In a large bowl mix water, yeast and sugar. Rest in a warm place for ten minutes until bubbly and yeasty
                smelling.</p>
            <p>Mix in flour, salt and water, and mix.</p>
            <p>Once the mixture has come together knead the dough for 3-5 minutes.</p>
            <p>Cover with a tea towel and put in a warm place for an hour or so to rise.</p>
            <p>When the dough has risen gently push it down to release the gases and knead a further 2 minutes.</p>
            <p>Cut the dough into two and, on a floured surface, shape each piece to fit your tins.</p>
            <p>Line the two loaf tins and put your shaped loaves into them. Put these back in your warm place to rise
                again for a
                further half hour.</p>
            <p>Meanwhile, pre-heat oven to 180 deg C. Or 200 deg C if you have a slow oven.</p>
            <p>Bake the loaves for 30 to 40 minutes until golden brown. Remove from tins and allow to cool on a wooden
                breadboard or wire rack. The bread should sound hollow when you tap the base.</p>
            <p>Allow to cool for at least twenty minutes before slicing any bread as this allows the bread to finish its
                baking process.</p>
        </section>
    </PhotoLayout>
)

export default BreadPage
