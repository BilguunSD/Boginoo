const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectionString = process.env.MONGO_URI;

exports.connectDatabase = async () => {
    try {
        await mongoose.connect(connectionString);
    } catch (err) {
        console.log(err);
    }
};
