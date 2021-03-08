import React from "react"

export function KitchenPageLayout(props) {
    return (
        <section>
            <h1>{props.recipe.title}</h1>
            <img src={props.recipe.imageMain} alt={props.recipe.imageMainAlt}/>

            <article>
                <h2>Ingredients step one</h2>
                <ul>{props.recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient.text}</li>)}</ul>
            </article>

            <article>
                <h2>Ingredients step two</h2>
                <ul>{props.recipe.ingredients02.map((ingredient, i) => <li key={i}>{ingredient.text}</li>)}</ul>
            </article>

            <article>
                <h2>Step one</h2>
                <ul>{props.recipe.methods.map((method, i) => <li key={i}>{method.text}</li>)}</ul>
            </article>

            <article>
                <h2>Step two</h2>
                <ul>{props.recipe.methods02.map((method, i) => <li key={i}>{method.text}</li>)}</ul>
            </article>
        </section>
    )
}

export default KitchenPageLayout
