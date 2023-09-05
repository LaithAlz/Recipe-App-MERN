import React, { useState } from "react";
import "../styles/AddRecipe.css";
import addRecipe from "../helpers/addRecipe";
import { useRecipeContext } from "../helpers/useRecipeContext";
import { useAuthContext } from "../helpers/useAuthContext";

const AddRecipe = () => {
  const { dispatch } = useRecipeContext();
  const { user } = useAuthContext();
  const [error, setError] = useState("");

  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    ingredients: [""],
    instructions: [""],
    // image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const addToDB = async () => {
      const res = await addRecipe(recipeData, user);
      dispatch({ type: "ADD_RECIPE", payload: res.data });
      console.log("RES", res.data);
    };
    addToDB();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    const updatedIngredients = [...recipeData.ingredients];
    updatedIngredients[index] = value;
    setRecipeData({ ...recipeData, ingredients: updatedIngredients });
  };

  const handleInstructionChange = (e, index) => {
    const { value } = e.target;
    const updatedInstructions = [...recipeData.instructions];
    updatedInstructions[index] = value;
    setRecipeData({ ...recipeData, instructions: updatedInstructions });
  };

  const addIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ""],
    });
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...recipeData.ingredients];
    updatedIngredients.splice(index, 1);
    setRecipeData({ ...recipeData, ingredients: updatedIngredients });
  };

  const addInstruction = () => {
    setRecipeData({
      ...recipeData,
      instructions: [...recipeData.instructions, ""],
    });
  };

  const removeInstruction = (index) => {
    const updatedInstructions = [...recipeData.instructions];
    updatedInstructions.splice(index, 1);
    setRecipeData({ ...recipeData, instructions: updatedInstructions });
  };

  return (
    <div className="add-recipe-container">
      <h1>Add Recipe</h1>
      <form id="recipe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipeData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={recipeData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Ingredients:</label>
          <ul className="ingredient-list">
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index}>
                <input
                  type="text"
                  name="ingredient"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  required
                />
                <button
                  type="button"
                  className="remove-ingredient"
                  onClick={removeIngredient}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="add-ingredient"
            onClick={addIngredient}
          >
            Add Ingredient
          </button>
        </div>

        <div className="form-group">
          <label>Instructions:</label>
          <ol className="instruction-list">
            {recipeData.instructions.map((instruction, index) => (
              <li key={index}>
                <textarea
                  name="instruction"
                  value={instruction}
                  onChange={(e) => handleInstructionChange(e, index)}
                  required
                />
                <button
                  type="button"
                  className="remove-instruction"
                  onClick={removeInstruction}
                >
                  Remove
                </button>
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="add-instruction"
            onClick={addInstruction}
          >
            Add Instruction
          </button>
        </div>

        {/* <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={recipeData.image}
            onChange={handleInputChange}
            required
          />
        </div> */}

        <button type="submit">Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AddRecipe;
