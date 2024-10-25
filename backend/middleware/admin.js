

   export default function (req, res, next) {
  if (!req.body.userRole === "admin") {
    return res.status(403).send("Access denied.");
  }
  next();
}


   export default adminMiddleware;



