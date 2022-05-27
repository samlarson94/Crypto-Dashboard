// const { AuthenticationError } = require('apollo-server-express');
const { Crypto } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
   crypto: async () => {
     return Crypto.find({});
   }
  },

  // Mutation: {
  //   addCrypto: async 
  // }

   
};

module.exports = resolvers;
