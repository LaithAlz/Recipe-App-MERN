import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3 className="recipe-title">{recipe.title}</h3>
      <p className="recipe-description">{recipe.description}</p>
      <a href={`/recipe/${recipe.id}`} className="recipe-link">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
