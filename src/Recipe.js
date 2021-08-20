import React from 'react'
import { v4 as uuidv4 } from "uuid";
import style from "./recipe.module.css";

export default function Recipe(props) {
    return (
      <div className={style.recipe}>
        <h2>{props.title}</h2>
        <ul>
          <h3>Ingredients</h3>
          {props.ingredients.map((ingredient) => (
            <li key={uuidv4()}>{ingredient}</li>
          ))}
        </ul>
        <img src={props.image} alt={props.image} />
        <div className={style.calories}>
          <b>Calories</b>
          {props.calories}
        </div>
      </div>
    );
}
