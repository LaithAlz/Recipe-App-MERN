import React from "react";
import "../styles/Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <ul className="category-list">
        <Link to={`/categories/Breakfast`}>
          <li>Explore Breakfast Recipes</li>
        </Link>
        <Link to={`/categories/Main-Course`}>
          <li>Explore Main Course Recipes</li>
        </Link>
        <Link to={`/categories/Dessert`}>
          <li>Explore Dessert Recipes</li>
        </Link>
      </ul>
    </div>
  );
};

export default Categories;
