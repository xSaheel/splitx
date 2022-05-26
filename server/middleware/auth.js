const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            // Verifying the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Getting user from the token
            req.user = await User.findById(decoded.id).select("-password");

            // Like a return statement lets js move to next middleware
            next();
        } catch (err) {
            res.status(401);
            throw new Error("Not Authorized");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not Authorized: Token Missing")
    }
});

module.exports = { protect };