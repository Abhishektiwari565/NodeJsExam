import jwt from "jsonwebtoken";

const SECRET = "mysecret";

export const authUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Login Required" });

  const decoded = jwt.verify(token, SECRET);
  req.user = decoded;
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin Only" });
  }
  next();
};