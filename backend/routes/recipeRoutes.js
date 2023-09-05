const express = require("express");
const {
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  addRecipe,
} = require("../controller/recipeController");

const router = express.Router();

// GET all recipes
router.get("/", getRecipes);

// GET one recipe
router.get("/:id", getRecipe);

// ADD one recipe
router.post("/", addRecipe);

// PATCH recipe (update)
router.patch("/:id", updateRecipe);

// DELETE recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
