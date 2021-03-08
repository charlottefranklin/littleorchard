import React from "react"
import {recipe} from "./recipe";

import PhotoLayout from "../../../../components/photoLayout"
import KitchenPageLayout from "../../../../components/kitchenPageLayout";

const PizzaPage = () => (
    <PhotoLayout>
        pizza
        <article>
            {recipe.map((post, i) => <KitchenPageLayout post={post} key={i}/>)}
        </article>
    </PhotoLayout>
)

export default PizzaPage
