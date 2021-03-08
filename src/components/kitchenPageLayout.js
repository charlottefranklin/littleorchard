import React from "react"

export function KitchenPageLayout(props) {
    return (
        <section>
            <h1>{props.recipe.title}</h1>
            <img src={props.recipe.imageMain} alt={props.recipe.imageMainAlt}/>
            <h2>Ingredients part one</h2>
            <article>{props.recipe.ingredients.map((ingredient, i) => <p key={i}>{ingredient.name}</p>)}</article>
            <h2>Ingredients part two</h2>
            <article>{props.recipe.ingredients02.map((ingredient, i) => <p key={i}>{ingredient.name}</p>)}</article>
            <h2>Part one</h2>
            <article>{props.recipe.methods.map((method, i) => <p key={i}>{method.text}</p>)}</article>
            <h2>Part two</h2>
            <article>{props.recipe.methods02.map((method, i) => <p key={i}>{method.text}</p>)}</article>
        </section>
    )
}

export default KitchenPageLayout
