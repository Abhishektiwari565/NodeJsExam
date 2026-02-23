import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth_routes.js";
import recipeRoutes from "./routes/receipe_routes.js";

const app = express();

await connectDB();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());    

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});