const { gql } = require("apollo-server-express");

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
    favorites: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Favorite {
    userFrom: User
    coinTitle: String
    coinImg: String
    coinLink: String
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
    addFavorite(userId: ID!, favorite: String!): User
    removeFavorite(userId: ID!, favorite: String!): User
  }
`;

module.exports = typeDefs;
