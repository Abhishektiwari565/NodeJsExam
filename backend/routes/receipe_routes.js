import express from "express";
import { addRecipe, getAllRecipes, getMyRecipes } from "../controllers/recipeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addRecipe);
router.get("/all", getAllRecipes);
router.get("/my", protect, getMyRecipes);

export default router;