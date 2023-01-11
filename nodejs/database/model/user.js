const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [8, "Username must be at least 8 characters"],
    maxlength: [20, "Username must be contains from 8 to 20 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [30, "Username must be 8 to 30 characters"],
  },
  email: { type: String, required: [true, "Email is required"], unique: true },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("Users", Users);

module.exports = UserModel;
