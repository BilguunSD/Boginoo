const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  FullUrl: {
    type: String,
    required: true,
  },
  ShortUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UrlModel = mongoose.model("urls", UrlSchema);

module.exports = UrlModel;
