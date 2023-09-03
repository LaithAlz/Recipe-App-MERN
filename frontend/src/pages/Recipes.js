import React from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/Recipes.css";

const Recipes = () => {
  const data = [
    {
      id: 1,
      image: "recipe-image-1.jpg",
      title: "Recipe 1",
      description: "Description of Recipe 1.",
    },
    {
      id: 2,
      image: "recipe-image-2.jpg",
      title: "Recipe 2",
      description: "Description of Recipe 2.",
    },
    {
      id: 3,
      image: "recipe-image-3.jpg",
      title: "Recipe 3",
      description: "Description of Recipe 3.",
    },
  ];

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
