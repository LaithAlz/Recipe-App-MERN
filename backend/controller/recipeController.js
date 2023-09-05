const Recipe = require("../models/recipeModel");

// GET all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({}).sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET one recipe
const getRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST recipe
const addRecipe = async (req, res) => {
  const { title, description, ingredients, instructions } = req.body;

  try {
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
    });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH recipe
const updateRecipe = async (req, res) => {
  res.json({ msg: "PATCH one recipe" });
};

// DELETE recipe
const deleteRecipe = async (req, res) => {
  res.json({ msg: "DELETE one recipes" });
};

module.exports = {
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  addRecipe,
};
