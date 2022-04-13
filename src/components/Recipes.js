import { v4 as uuid } from 'uuid';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
    return (
        <div className="recipes">
            {recipes.map((recipe) => (
                <Recipe
                    key={uuid()}
                    image={recipe.recipe.image}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    ingredients={recipe.recipe.ingredientLines}
                />
            ))}
        </div>
    )
}

export default Recipes;