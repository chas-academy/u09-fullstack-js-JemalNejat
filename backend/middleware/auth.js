import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if authorization header is present and in the correct format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Not authenticated, please log in.");
  }

  try {
    // Extract token from "Bearer <token>" format
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user information to the request body
    req.body.userId = decodedToken.id;
    req.body.userRole = decodedToken.role;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).send("Invalid or expired token.");
  }
};

export default authMiddleware;
