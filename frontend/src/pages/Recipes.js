import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/Recipes.css";
import getRecipes from "../helpers/getRecipes";
import { useAuthContext } from "../helpers/useAuthContext";
import { useRecipeContext } from "../helpers/useRecipeContext";

const Recipes = () => {
  const [data, setData] = useState([]);
  const { recipes, dispatch } = useRecipeContext();

  const { user } = useAuthContext();

  useEffect(() => {
    const getData = async () => {
      // const headers = { headers: { Authorization: `Bearer ${user.token}` } };
      const config = {
        headers: { Authorization: "Bearer " + user.token },
      };
      const res = await getRecipes(config);
      if (res) {
        dispatch({ type: "SET_RECIPES", payload: res.data });
      }
    };

    if (user) {
      getData();
    }
  }, [dispatch, user]);

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Recipes;
