import React from "react"
import KitchenLayout from "../../../../components/kitchenLayout";
import {recipe} from "../pizza/recipe";
import KitchenPageLayout from "../../../../components/kitchenPageLayout";

const CardamomCakePage = () => (
    <KitchenLayout>
        cardamom
        <article>
            {recipe.map((post, i) => <KitchenPageLayout post={post} key={i}/>)}
        </article>
    </KitchenLayout>
)

export default CardamomCakePage


