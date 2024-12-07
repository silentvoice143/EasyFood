import jwt from "jsonwebtoken";

// Replace this with your actual secret key
const SECRET_KEY = "your_secret_key";

const authMiddleware = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided!" });
  }

  // Bearer token format
  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token!" });
    }

    req.user = decoded;
    next();
  });
};

export default authMiddleware;
