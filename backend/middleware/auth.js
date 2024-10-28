import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : req.headers.token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, login again!" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: token_decode.id, role: token_decode.role };
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(401).json({
      success: false,
      message: "Unauthorized access, token verification failed",
    });
  }
};

export default authMiddleware;
