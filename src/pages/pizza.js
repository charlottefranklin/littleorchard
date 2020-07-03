import React from "react"

import Layout from "../components/layout"
import pizza01 from "../images/pizza.jpg"

const PizzaPage = () => (
  <Layout>

    <h1>Pizza</h1>
    <img src={pizza01} alt="bread"/>

    <h2>Step 1 ingredients</h2>
    <ul>
      <li>4 teaspoons dried yeast</li>
      <li>450ml warm water</li>
      <li>150g flour</li>
    </ul>
    <h2>Step 2 ingredients</h2>
    <ul>
      <li>2 tbsp milk</li>
      <li>4 tbsp olive oil</li>
      <li>1 tsp sea salt</li>
      <li>500g spelt flour</li>
    </ul>

    <h2>Step 1</h2>

    <p>In a bowl, mix the yeast with the warm water, then mix in the flour. Cover and leave in a warm place for at
      least 30 minutes until the yeast froths.</p>

    <h2>Step 2</h2>

    <p>When the mixture has expanded add the remaining ingredients and knead for 10-15 minutes – either by hand or in
      a mixer with a dough hook. Wet and sticky dough is fine.</p>
    <p>Grease a bowl with olive oil. Place dough in bowl and drizzle with a jot more oil.</p>
    <p>Cover with a cloth and leave in a warm place for 2 hours to rise.</p>
    <p>Gently press the air out of the dough and knead again a few times before returning to the bowl.</p>
    <p>Return the dough to the warm place for a further 40 minutes.</p>
    <p>Pre-heat the oven to 200 deg C.</p>
    <p>Roll the dough out on a floured baking sheet, as thinly as you can.</p>
    <p>Using the back of a spoon spread tomato paste and add topping of your choice.</p>
    <p>Bake for 10 minutes or until golden brown.</p>
  </Layout>
)

export default PizzaPage