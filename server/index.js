const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");

const userModel = require("./models/user.model");

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.post("/api/register", (req, res) => {
    const newUser = new userModel(req.body);
    newUser.save()
        .then(user => res.json({...user, status: "ok", message: "User Added Successfully"}))
        .catch(err => res.json({status: "error", error: "User with that Email already exists"}))
});

app.post("/api/login", async (req, res) => {
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

app.get("/api/user", (req, res) => {
    userModel.find()
        .then(user => res.json(user))
        .catch(err => console.log('err: ', err))
});

app.listen(PORT, () => {console.log(`Server started successfully on port ${PORT}`)});