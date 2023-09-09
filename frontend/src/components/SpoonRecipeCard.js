import "../styles/RecipeCard.css";
import { Link } from "react-router-dom";

const SpoonRecipeCard = ({ recipe }) => {
    const formattedSummary = { __html: recipe.summary }; 

  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3 className="recipe-title">{recipe.title}</h3>
      <p className="recipe-description" dangerouslySetInnerHTML={formattedSummary}></p>
      <Link className="recipe-link" to={`${recipe.sourceUrl}`}>
        View Recipe
      </Link>
    </div>
  );
};

export default SpoonRecipeCard;
