import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/RecipeDetails.css"; // Import your CSS file
import getOneRecipe from "../api/getOneRecipe";
import { useAuthContext } from "../helpers/useAuthContext";
import { useRecipeContext } from "../helpers/useRecipeContext";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL parameter
  const { user } = useAuthContext();
  const { recipes, dispatch } = useRecipeContext();

  useEffect(() => {
    const config = {
      headers: { Authorization: user ? "Bearer " + user.token : null },
    };

    const getRecipeDetails = async () => {
      try {
        const res = await getOneRecipe(id, config);
        dispatch({ type: "SET_RECIPES", payload: res.data });
      } catch (error) {
        // Handle error, e.g., redirect to an error page
        console.error("Error fetching recipe details:", error);
      }
    };
    // if (user) {
      getRecipeDetails();
    // }
  }, [user, dispatch, id]);
  console.log(recipes);

  if (!recipes) {
    return <div className="recipe-details">Recipe not found.</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipes.recipe && recipes.recipe.title}</h2>
      <p>{recipes.recipe && recipes.recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipes.recipe &&
          recipes.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipes.recipe &&
          recipes.recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
