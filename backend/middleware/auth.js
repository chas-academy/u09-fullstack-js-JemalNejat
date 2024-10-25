import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).send("Not authenticated, login again!");
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    req.body.userRole = token_decode.role;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

export default authMiddleware;





