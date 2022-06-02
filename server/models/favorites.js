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


// create model favorite crypto

// save favorite crypto

// each favorite will have a user reference

// crypto reference in user table

// Crypto array of objects

// Resolver / typeDef for this

