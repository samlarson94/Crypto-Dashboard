const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Crypto {
      _id: ID
      name: String
  }

  type Query {
      crypto: Crypto
  }
`;

module.exports = typeDefs;
