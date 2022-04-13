import React,{useState} from 'react';
import RecipeSearch from './components/RecipeSearch'
import Recipes from './components/Recipes'
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <h1>Grab a Recipe</h1>
      <RecipeSearch setRecipes={setRecipes}/>
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default App;
