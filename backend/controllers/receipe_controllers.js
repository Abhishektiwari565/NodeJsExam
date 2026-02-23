import Recipe from "../models/receipe_models.js";

// Get All Recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("user", "name email role"); // only send safe fields

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Recipe
export const addRecipe = async (req, res) => {
  try {
    const { title, description } = req.body;

    const recipe = await Recipe.create({
      title,
      description,
      user: req.user.id
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get My Recipes
export const getMyRecipes = async (req, res) => {
  const recipes = await Recipe.find({ user: req.user.id });
  res.json(recipes);
};