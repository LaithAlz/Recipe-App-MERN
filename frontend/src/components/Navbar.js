import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const isLoggedIn = false; 

  return (
    <div className="navbar">
      <Link to="/">
        <img src="./logo.png" alt="LOGO" className="logo" />
      </Link>

      <div className="links">
        <Link className="nav-link" to="/recipes">
          Recipes
        </Link>
        <Link className="nav-link" to="/add-recipe">
          Add Recipe
        </Link>
        <Link className="nav-link" to="/categories">
          Categories
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>

      <div className="search">
        <input type="search" className="search-input" placeholder="Search" />
        <button className="search-button">Search</button>
      </div>
      <div className="auth-links">
        {isLoggedIn ? (
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        ) : (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
