import React from "react";
import "../styles/Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <ul className="category-list">
        <li className="category-item">Category 1</li>
        <li className="category-item">Category 2</li>
        <li className="category-item">Category 3</li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
};

export default Categories;
