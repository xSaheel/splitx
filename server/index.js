const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/error");

const userRoutes = require("./routes/user");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use("/api/user", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => { console.log(`Server started successfully on port ${PORT}`) });