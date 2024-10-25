import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Not authenticated, login again!");
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: token_decode.id, role: token_decode.role };
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(401).send("Unauthorized");
  }
};

export default authMiddleware;
