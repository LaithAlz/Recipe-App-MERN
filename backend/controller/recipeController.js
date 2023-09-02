const Recipe = require("../models/recipeModel");

// GET all recipes
const getRecipes = async (req, res) => {
  res.json({ msg: "GET all recipes" });
};

// GET one recipe
const getRecipe = async (req, res) => {
  res.json({ msg: "GET one recipes" });
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
};
