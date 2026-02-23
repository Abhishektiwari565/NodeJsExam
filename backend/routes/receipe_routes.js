import express from "express";
import {
  getAllRecipes,
  addRecipe,
  getMyRecipes
} from "../controllers/receipe_controllers.js";

import { authUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/add", authUser, addRecipe);
router.get("/my", authUser, getMyRecipes);

export default router;