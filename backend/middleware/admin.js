

   const adminMiddleware = (req, res, next) => {
     if (req.body.userRole !== "admin") {
       return res.status(403).send("Access denied: Admins only.");
     }
     next();
   };

   export default adminMiddleware;

