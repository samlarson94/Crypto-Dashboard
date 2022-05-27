const { Schema, model } = require('mongoose');

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true
  }
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Tech;