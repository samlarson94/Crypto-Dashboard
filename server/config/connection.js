const mongoose = require('mongoose');

// ADD MONGODB DATABASE NAME
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crypto-dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
