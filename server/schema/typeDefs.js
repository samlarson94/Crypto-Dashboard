const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Crypto {
      _id: ID
      target: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Query {
      crypto: Crypto
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
`;

module.exports = typeDefs;
