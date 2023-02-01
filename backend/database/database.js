const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectionString = process.env.MONGODB_URI;

exports.connectDatabase = async () => {
    try {
        await mongoose.connect(connectionString);
    } catch (err) {
        console.log(err);
    }
};
