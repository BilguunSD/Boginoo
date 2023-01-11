const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connectionString = process.env.MONGODB_URI;

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Successfully Connected");
    return "Mongoose connected";
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
