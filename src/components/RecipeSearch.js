import React, { useState, useEffect, useCallback } from 'react';

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const getApiUrl = (query) => `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

const RecipeSearch = ({ setRecipes }) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [noRecipesFound, setNoRecipesFound] = useState(false);

  const GetRecipes = useCallback(async () => {
    const API_URL = getApiUrl(query);
    const response = await fetch(API_URL);
    const data = response ? await response.json() : null;

    if (data.hits.length > 0) {
      setNoRecipesFound(false);
      setRecipes(data.hits);
    } else if (data.hits.length === 0 && query) {
      setNoRecipesFound(true);
      setTimeout(() => setNoRecipesFound(false), 5000);
    }

    setShowLoader(false);
  }, [query, setRecipes]);

  useEffect(() => {
    GetRecipes();
  }, [GetRecipes, query]);

  const searchRecipes = (e) => {
    e.preventDefault();
    setShowLoader(true);
    setRecipes([]);
    setQuery(search);
    setSearch('');
  }

  const UpdateSearch = (e) => setSearch(e.target.value);

  return (
    <form onSubmit={searchRecipes} className="search-form">
      <input
        type="text"
        className="search-bar"
        value={search}
        onChange={UpdateSearch}
        placeholder="Search for a recipe here"
      />
      <button type="submit" className="search-button">
        Search
      </button>
      {showLoader ? <div className="loader"></div> : <></>}
      {noRecipesFound ? <p className="no-recipes-found">No recipes found, try a different recipe.</p> : <></>}
    </form>
  )
}

export default RecipeSearch;