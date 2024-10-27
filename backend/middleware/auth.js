import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Check both possible locations for the token
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : req.headers.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, login again!" });
  }

  try {
    // Decode and verify the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Set user data on req based on token payload
    req.user = { id: token_decode.id, role: token_decode.role };
    req.body.userId = token_decode.id;  // Set both req.user and req.body.userId for backward compatibility

    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(401).json({ success: false, message: "Unauthorized access, token verification failed" });
  }
};

export default authMiddleware;
