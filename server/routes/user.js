const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserData } = require("../controllers/user");
const { protect } = require("../middleware/auth");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/", protect, getUserData);

module.exports = router;

