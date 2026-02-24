import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // who created (user id if authenticated)
  authorName: { type: String }, // optional display name provided on creation
}, { timestamps: true });

export default mongoose.model("Recipe", RecipeSchema);