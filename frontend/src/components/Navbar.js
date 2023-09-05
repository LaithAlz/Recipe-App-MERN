import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useLogout } from "../helpers/useLogout";
import { useAuthContext } from "../helpers/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const isLoggedIn = true;
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

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
        {user && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
        {!user && (
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
