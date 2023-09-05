import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { RecipesContextProvider } from "./contexts/RecipeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <RecipesContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecipesContextProvider>
  </AuthContextProvider>
);
