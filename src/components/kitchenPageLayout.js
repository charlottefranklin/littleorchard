import React from "react"

export function KitchenPageLayout(props) {
    return (
        <article>
            <h1>{props.recipe.title}</h1>
            <img src={props.recipe.imgMain} alt={props.image.imageMainAlt}/>
            <div>{props.recipe.ingredients.map((ingredient, i) => <img src={ingredient.text} key={i}/>)}</div>
        </article>
    )
}

export default KitchenPageLayout
