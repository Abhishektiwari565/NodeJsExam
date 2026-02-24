import User from "../models/user_models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "mysecret";

// Register Controller
export const registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      role: role || "user"
    });

    await user.save();

    res.json({ message: "Registered Successfully", user });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// Login Controller
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      SECRET
    );

    res.cookie("token", token, { httpOnly: true });

    // Return token in response so frontend can store it (and still set httpOnly cookie)
    res.json({ message: "Login Success", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

// Logout Controller
export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged Out" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Server error during logout" });
  }
};