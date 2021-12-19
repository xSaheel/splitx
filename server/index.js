const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
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
        .then(user => res.json(user))
        .catch(err => console.log('err: ', err))
});

app.listen(PORT, () => {console.log(`Server started successfully on port ${PORT}`)});