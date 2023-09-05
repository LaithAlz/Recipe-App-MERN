import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/Recipes.css";
import getRecipes from "../helpers/getRecipes";

const Recipes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getRecipes();
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {data.length > 0 ? (
          data.map((recipe) => (
            <RecipeCard key={String(recipe.id)} recipe={recipe} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
