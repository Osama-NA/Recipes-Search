import React from 'react'
import { v4 as uuid} from "uuid";
import style from "./recipe.module.css";

export default function Recipe(props) {
    return (
      <div className={style.recipe}>
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.image} />
        <ul>
          <h3>Ingredients</h3>
          {props.ingredients.map((ingredient) => (
            <li key={uuid()}>{ingredient}</li>
          ))}
        </ul>
        <div className={style.calories}>
          <b>Calories: </b>
          {formatCalories(props.calories)}
        </div>
      </div>
    );
}

const formatCalories = (calories) => {
  calories = calories.toString().split(".");
  let decimals = calories[1].substring(0, 3);
  calories = `${calories[0]}.${decimals}`
  return calories;
}
