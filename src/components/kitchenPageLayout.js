import React from "react"

export function KitchenPageLayout(props) {
    return (
        <section>
            <h1>{props.recipe.title}</h1>
            <img src={props.recipe.imageMain} alt={props.recipe.imageMainAlt}/>

            <article>
                <h2>Ingredients</h2>
                <ul>{props.recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient.text}</li>)}</ul>
            </article>

            <article>
                <h2>Method</h2>
                <ul>{props.recipe.steps.map((steps, i) => <li key={i}>{steps.text}</li>)}</ul>
                <div>{props.recipe.images.map((image, i) => <img src={image.imageUrl} alt={image.imageAlt} key={i}/>)}</div>
            </article>

        </section>
    )
}

export default KitchenPageLayout
