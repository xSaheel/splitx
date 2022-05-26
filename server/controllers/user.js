const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

/**
 * 
 * @desc Register a new user
 * @route /api/user/register
 * @access Public 
 */
const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User with entered email already exists!");
    }

    // Hashing the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ ...req.body, password: hashedPassword });
    if (user) {
        res.status(201).json({ 
            message: "User Registered Successfully", 
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                accessToken: generateToken(user._id)
            }
        });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }
});

/**
 * 
 * @desc Authenticate an existing user
 * @route /api/user/login
 * @access Public 
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Finds if user with that email exists in DB
    const user = await User.findOne({ email });

    // Matching string pw with hashed pw from DB
    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ 
            message: "User Logged in Successfully", 
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                accessToken: generateToken(user._id)
            }
        });
    } else {
        res.status(400);
        throw new Error("Invalid Credentials");
    }
});

/**
 * 
 * @desc Fetch user's data
 * @route /api/user/
 * @access Private 
 */
const getUserData = asyncHandler(async (req, res) => {
    return res.status(200).json(req.user);
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" }); 
}

module.exports = {
    registerUser,
    loginUser,
    getUserData
}