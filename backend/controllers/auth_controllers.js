import User from "../models/user_models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "mysecret";

// Register Controller
export const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: hashedPassword,
    role
  });

  await user.save();

  res.json({ message: "Registered Successfully" });
};

// Login Controller
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    SECRET
  );

  res.cookie("token", token, { httpOnly: true });

  res.json({ message: "Login Success" });
};

// Logout Controller
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged Out" });
};