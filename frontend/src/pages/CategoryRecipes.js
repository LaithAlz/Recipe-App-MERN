import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import getSpoonCat from "../api/getSpoonCat";
import { useParams } from "react-router-dom";
import '../styles/CategoryRecipes.css'

const CategoryRecipes = ({ categoryName }) => {
  const [recipes, setRecipes] = useState([]);

  const params = useParams();
  const cat = params.categoryName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSpoonCat(10, cat);
        if (response.data.results) {
          setRecipes(response.data.results);
        } else {
          console.error("Invalid data format in API response");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="category-recipes-container">
      <h1>{cat} Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default CategoryRecipes;
