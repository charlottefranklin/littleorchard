import React from "react"

import Layout from "../../components/layout"

const SourdoughNoKneadPage = () => (
    <Layout>
        <h1>No-knead sourdough</h1>
        {/*<img src={bread} alt="Two loaves of bread"/>*/}
        <section>
            <em>Makes 1 loaf</em>
            <h2>Ingredients</h2>
            <ul>
                <li>150g sourdough bubbly starter</li>
                <li>400g white spelt flour</li>
                <li>350g spring water</li>
                <li>8g salt</li>
            </ul>
            <p>In a large bowl mix flour, salt, water and starter. </p>
            <p>Leave to stand 6-8 hours, covered with a dinner plate.</p>
            <p>Pour mix into a greased bread tin and leave for a further 4-6 hours.</p>
            <p>Heat oven to 220C and put a roasting pan on the very bottom shelf.</p>
            <p>Boil the kettle.</p>
            <p>Once the oven is at temperature turn the heat down to 200C and put the bread in the oven on the middle shelf.</p>
            <p>Pour 1 cup of boiling water into the roasting pan and carefully close the oven door.</p>
            <p>This creates steam to give the baking process a boost. </p>
            <p>Bake for 45 mins or until the crust is golden.</p>
            <p>Remove the bread from the tin and bake a further 5-10 minutes until golden all over. </p>
            <p>Take the bread out of the oven, tap the base to ensure it sounds hollow and cool on a wire rack. </p>
            <p>Leave the bread at least 2 hours to complete the baking process.</p>
            <p>Recipe adapted from <a href={"https://shop.nicolagalloway.co.nz/cooking-workshops"} target={"_blank"} rel={"noopener noreferrer"}>Nicola Galloway's sourdough course.</a></p>
        </section>
    </Layout>
)

export default SourdoughNoKneadPage
