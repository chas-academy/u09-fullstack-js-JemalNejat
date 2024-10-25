import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization; // Correctly get the authorization header
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token from Bearer format

  if (!token) {
    return res.status(401).send("Not authenticated, login again!");
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {  // Set user information in req.user
      id: token_decode.id,
      role: token_decode.role,
    };
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    console.error("JWT verification error:", error.message);  // Log error for debugging
    res.status(401).send("Unauthorized");  // Send a 401 response
  }
};

export default authMiddleware;
