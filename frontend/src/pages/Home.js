import React from "react";
import "../styles/Home.css";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const data = [
    {
      id: 1,
      image: "HELLO",
      title: "TITLE",
      description: "DESC",
    },
    {
      id: 2,
      image: "HELLO",
      title: "TITLE",
      description: "DESC",
    },
  ];
  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h1>Welcome to Your Recipe Website</h1>
          <p>Discover delicious recipes for every occasion.</p>
          <a href="/recipes" className="cta-button">
            Explore Recipes
          </a>
        </div>

        <div className="featured-recipes">
          {data.map((recipe) => {
            return <RecipeCard recipe={recipe} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
