import Recipe from "../models/receipe_models.js";

// Get All Recipes
export const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find().populate("user");
  res.json(recipes);
};

// Add Recipe
export const addRecipe = async (req, res) => {
  const recipe = new Recipe({
    ...req.body,
    user: req.user.id
  });

  await recipe.save();
  res.json(recipe);
};

// Get My Recipes
export const getMyRecipes = async (req, res) => {
  const recipes = await Recipe.find({ user: req.user.id });
  res.json(recipes);
};