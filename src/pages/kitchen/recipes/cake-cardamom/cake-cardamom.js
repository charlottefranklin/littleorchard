import React from "react"
import {recipe} from "./recipe";

import KitchenPageLayout from "../../../../components/kitchenPageLayout";
import PhotoLayout from "../../../../components/photoLayout";

const CardamomCakePage = () => (
    <PhotoLayout>
        <article>
            {recipe.map((recipe, i) => <KitchenPageLayout recipe={recipe} key={i}/>)}
        </article>
    </PhotoLayout>
)

export default CardamomCakePage


