import React from "react"
import {recipe} from "./recipe";

import PhotoLayout from "../../../../components/photoLayout"
import KitchenPageLayout from "../../../../components/kitchenPageLayout";

const PizzaPage = () => (
    <PhotoLayout>
        <article>
            {recipe.map((recipe, i) => <KitchenPageLayout recipe={recipe} key={i}/>)}
        </article>
    </PhotoLayout>
)

export default PizzaPage
