const userModel = require("./models/user.model");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post("/register", (req, res) => {
    const newUser = new userModel(req.body);
    newUser.save()
        .then(user => res.json({...user, status: "ok", message: "User Added Successfully"}))
        .catch(err => res.json({status: "error", error: "User with that Email already exists"}))
});

router.post("/login", async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email, password: req.body.password })
    if (user) {
        /**
         * Base 64 encoding made up of payload + timestamp 
         */
        const token = jwt.sign({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }, process.env.JWT_SECRET);
        return res.json({ user: token, status: "ok", message: "Logged in Successfully"});
    } else {
        return res.json({ status: "error", error: "Either Email or Password is Incorrect"});
    }
});

router.get("/", (req, res) => {
    userModel.find()
        .then(user => res.json(user))
        .catch(err => console.log('err: ', err))
});

module.exports = router;

