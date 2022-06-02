const mongoose = require("mongoose");
const schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
  userFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  coinId: {
    type: String,
  },
  coinTitle: {
    type: String,
  },
  coinImg: {
    type: String,
  },
  coinLink: {
    type: String,
  },
});
