const UserSchema = require("../database/model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.allUser = async () => {
  const result = await UserSchema.find();
  return result;
};

exports.userReadById = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
};

exports.userReadByEmail = async (req) => {
  const { email } = req.params;
  const result = await UserSchema.findOne({ email: email });
};

exports.userCreateQuery = async (req) => {
  let { password, email } = req.body;
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  const Salty = await bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      return hash;
    })
    .catch((err) => console.error(err.message));

  const result = await new UserSchema({
    password: Salty,
    email: email,
  }).save();
  return result;
};

exports.userUpdateQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  const { password, email } = req.body;
  await UserSchema.findByIdAndUpdate(result, {
    password: password,
    email: email,
  });
};

exports.userDeleteQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  await UserSchema.findByIdAndRemove(result);
};
