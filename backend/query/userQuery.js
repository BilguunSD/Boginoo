const UserSchema = require("../database/model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(1);

exports.getUserQuery = async () => {
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
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, salt);
  await new UserSchema({
    username: username,
    email: email,
    password: hash,
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
