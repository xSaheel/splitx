const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: { 
        type: String,
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});

module.exports = User = mongoose.model("UserData", UserSchema);;
