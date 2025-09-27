import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const protectRouter = async (req, res, next) => {  try {
    // Get token from cookies
    const token = req.cookies?.jwt;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to request
    req.user = decoded;

    next(); // proceed to next middleware/route
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
