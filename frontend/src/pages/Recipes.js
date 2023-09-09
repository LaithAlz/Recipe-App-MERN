import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/Recipes.css";
import getRecipes from "../api/getRecipes";
import { useAuthContext } from "../helpers/useAuthContext";
import { useRecipeContext } from "../helpers/useRecipeContext";
import getSpoonRecipes from "../api/getSpoonRecipes";
import SpoonRecipeCard from "../components/SpoonRecipeCard";

const Recipes = () => {
  const [data, setData] = useState([]);
  const { recipes, dispatch } = useRecipeContext();

  const { user } = useAuthContext();

  useEffect(() => {
    const getData = async () => {
      const config = {
        headers: { Authorization: "Bearer " + user.token },
      };
      const res = await getRecipes(config);
      if (res) {
        dispatch({ type: "SET_RECIPES", payload: res.data });
      }
    };

    const getRandoms = async () => {
      const res2 = await getSpoonRecipes(6);
      setData(res2.data.recipes);
    };

    if (user) {
      getData();
      getRandoms();
    }
  }, [dispatch, user]);

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      <div className="recipe-section">
        <h2>My Recipes</h2>
        <div className="recipe-list">
          {recipes && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <h4>No Added Recipes</h4>
          )}
        </div>
      </div>
      <div className="recipe-section">
        <h2>Random Recipes</h2>
        <div className="recipe-list">
          {data.map((recipe) => {
            return <SpoonRecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
