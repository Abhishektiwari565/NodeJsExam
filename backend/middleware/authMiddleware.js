import jwt from "jsonwebtoken";

const SECRET = "mysecret";

export const authUser = (req, res, next) => {
  // Try cookie first, then Authorization header as fallback
  const cookieToken = req.cookies?.token;
  const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null;

  const token = cookieToken || headerToken;

  console.log("[authUser] cookieToken:", cookieToken);
  console.log("[authUser] headerToken:", headerToken);

  if (!token) return res.status(401).json({ message: "Login Required" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("[authUser] token verify error:", err.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin Only" });
  }
  next();
};