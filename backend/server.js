import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth_routes.js";
import recipeRoutes from "./routes/receipe_routes.js";

const app = express();

await connectDB();

// Allow dev frontends on common Vite ports and enable credentials
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"], credentials: true }));

app.use(express.json());
app.use(cookieParser());    

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(err.status || 500).json({ 
    message: err.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});