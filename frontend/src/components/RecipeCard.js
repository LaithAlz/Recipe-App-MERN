import "../styles/RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3 className="recipe-title">{recipe.title}</h3>
      <p className="recipe-description">{recipe.description}</p>
      <Link className="recipe-link" to={`${recipe._id}`}>
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
