import React from "react"
import {recipe} from "./recipe";

import PhotoLayout from "../../../../components/photoLayout"
import KitchenPageLayoutTwoSteps from "../../../../components/kitchenPageLayoutTwoSteps";

const PizzaPage = () => (
    <PhotoLayout>
        <article>
            {recipe.map((recipe, i) => <KitchenPageLayoutTwoSteps recipe={recipe} key={i}/>)}
        </article>
    </PhotoLayout>
)

export default PizzaPage
