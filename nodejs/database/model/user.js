const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: { 
        type: String,
        required: true, 
        minlength: [ 8, "Username must be at least 8 characters" ], 
        maxlength: [20, "Username must be contains from 8 to 20 characters"] 
    },
    password: { type: String, required: true },
    email : { type: String, required: true },
    gender: { type: String, required: true },
    createdAt: { type: Date, default: Date.now()}
})

const UserModel = mongoose.model("User", User);

module.exports = UserModel;