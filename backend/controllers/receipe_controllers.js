import Recipe from "../models/Recipe.js";

// Add Recipe
export const addRecipe = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // from auth middleware

    const recipe = await Recipe.create({ title, description, user: userId });
    return res.status(201).json({ success: true, recipe });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get All Recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user", "username").sort({ createdAt: -1 });
    return res.json(recipes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get My Recipes
export const getMyRecipes = async (req, res) => {
  try {
    const userId = req.user.id;
    const recipes = await Recipe.find({ user: userId }).sort({ createdAt: -1 });
    return res.json(recipes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};