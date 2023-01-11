const User = require("../database/model/user");

exports.createUserQuery = async (req) => {
  const { username, password, email, gender } = req.body;
  const result = await new User({
    username: username,
    password: password,
    email: email,
    gender: gender,
  }).save();
  return result;
};
