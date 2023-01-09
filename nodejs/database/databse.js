const mongoose = require("mongoose");

const connectionString = `mongodb+srv://BilguunSD:CounterSpell3000@cluster0.x3dqhwq.mongodb.net/hop2c`;

exports.connectDatabse = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Successfully Connected");
    return "Mongoose connected";
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
