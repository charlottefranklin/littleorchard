import React from "react"
import {recipes} from "./recipes-data/recipes";

const KitchenIndex = () => {

    return (
        <section className={"flex-group flex-3"}>
            {recipes
                .map(recipe => <article key={recipe.date}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.date}</p>
                    <img src={recipe.imageMain} alt={recipe.imageMainAlt}></img>
                    <p>{recipe.snippet}</p>
                </article>)
            }
        </section>
    );
};

export default KitchenIndex
