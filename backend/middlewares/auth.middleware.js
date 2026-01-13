import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.json({success: false, message: "Unauthorized access"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id
        }

        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Invalid token"});
    }
}

export default authMiddleware;