const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(1);

const hash = bcrypt.hashSync("myPassword123", salt);

console.log(hash);
