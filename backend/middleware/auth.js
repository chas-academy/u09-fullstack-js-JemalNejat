import jwt from "jsonwebtoken";

// Combined middleware for authentication with role checks
const authMiddleware = async (req, res, next) => {
    const { token } = req.headers; // Expect token in headers
    if (!token) {
        return res.json({ success: false, message: "Not authorized, log in again!" });
    }
    
    try {
        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach user ID and role to the request object
        req.user = {
            id: token_decode.id,
            role: token_decode.role
        };

        // Proceed to the next middleware/route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Invalid token" }); // Return 401 for invalid token
    }
};

// Middleware to check if user is admin
const adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ success: false, message: "Access denied. Not an admin." });
    }
    next();
};

export { authMiddleware, adminMiddleware };
