const UrlSchema = require("../database/model/url");
const mongoose = require("mongoose");

exports.allUrl = async () => {
  const result = await UrlSchema.find();
  return result;
};

exports.urlReadById = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UrlSchema.findById({ _id: objId });
  return result;
};

exports.urlCreateQuery = async (req) => {
  const { id, FullUrl } = req.body;
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const allUrl = await UrlSchema.find();
  let newshorty = makeid(5);

  allUrl.map((el) => {
    if (newshorty == el.ShortUrl) {
      newshorty = makeid(5);
      checkUrl();
    }
  });

  const checkUrl = () => {
    allurl.map((el) => {
      if (newshorty == el.shortUrl) {
        newshorty = makeid(5);
      }
    });
  };

  const result = await new UrlSchema({
    userid: id,
    FullUrl: FullUrl,
    ShortUrl: newshorty,
  }).save();
  return result;
};

exports.urlUpdateQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UrlSchema.findById({ _id: objId });
  const { ShortUrl, FullUrl } = req.body;
  await UrlSchema.findByIdAndUpdate(result, {
    FullUrl: FullUrl,
    ShortUrl: ShortUrl,
  });
};

exports.urlDeleteQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UrlSchema.findById({ _id: objId });
  await UrlSchema.findByIdAndRemove(result);
};

exports.getIdUrlQuery = async (req) => {
  const { id } = req.params;
  const get = await UrlSchema.find();
  let heh;
  get.map((el) => {
    if (el.ShortUrl == id) {
      heh = el.FullUrl;
    }
  });
  return heh;
};

exports.historyUrlQuery = async (req) => {
  const { userId } = req.params;
  const get = await UrlSchema.find();
  let hah = [];
  get.map((el) => {
    if (el.userid == userid) {
      heh.push(el);
    }
  });
  return heh;
};
