import Recipe from "../models/receipe_models.js";

// Add Recipe
export const addRecipe = async (req, res) => {
  try {
    const { title, description, authorName } = req.body;
    const userId = req.user?.id; // from auth middleware (may be undefined)

    const recipeData = { title, description };
    if (userId) recipeData.user = userId;
    if (authorName) recipeData.authorName = authorName;

    const recipe = await Recipe.create(recipeData);
    // populate user field before returning so frontend can show author info
    const populated = await recipe.populate("user", "username");
    return res.status(201).json({ success: true, recipe: populated });
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