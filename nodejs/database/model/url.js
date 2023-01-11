const mongoose = require("mongoose");
const shortId = require("shortid");

const URL = new mongoose.Schema({
  uid: { type: String, required: true },
  FullUrl: {
    type: String,
    required: true,
    unique: true,
  },
  ShortUrl: { type: String, required: true, default: shortId.generate },
  createdAt: { type: Date, default: Date.now() },
});

const UrlModel = mongoose.model("Urls", URL);
module.exports = UrlModel;
