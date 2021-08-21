import React,{useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  //EDAMAM RECIPE SEARCH API ID & KEY
  const APP_ID = '8af7fa5d';
  const APP_KEY = '71fbaa29d1dfb64ef808e1281ba84f41';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  
  //Whenever the every new search query is submitted GetRecipes is called
  useEffect(() => {
    GetRecipes();
  },[query]);

  //GetRecipes fetches recipes from the EDAMAM recipe search API and sets the recipes state variable with the fetched data
  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  //Updates search whenever search input field is changed
  const UpdateSearch = (e) => setSearch(e.target.value);

  //Called whenever a search is done, to set the query variable as the search input, then resets search input 
  const GetSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1>Grab a Recipe</h1>
      <form onSubmit={GetSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={UpdateSearch}
          placeholder="Search for a recipe"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={uuidv4()}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
