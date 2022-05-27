const { Schema, model } = require("mongoose");
//to do: pull arr of objects from main api request

const cryptoSchema = new Schema({
  rates: { type: Object, required: true },
  timestamp: {
    type: Number,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
});

const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto;
