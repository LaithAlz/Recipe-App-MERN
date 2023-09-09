import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import RecipeCard from "../components/RecipeCard";
import getSpoonRecipes from "../api/getSpoonRecipes";
import SpoonRecipeCard from "../components/SpoonRecipeCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRandoms = async () => {
      const res = await getSpoonRecipes(2);
      setData(res.data.recipes)
    };
    getRandoms()
  }, []);


  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h1>Welcome to Your Recipe Website</h1>
          <p>Discover delicious recipes for every occasion.</p>
          <Link to="/recipes" className="cta-button">
            Explore Recipes
          </Link>
        </div>

        <div className="featured-recipes">
          {data.length > 0 && data.map((recipe) => {
            return <SpoonRecipeCard recipe={recipe} />
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
