import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Recipe", recipeSchema);