const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    favorites: [Favorite]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Favorite {
    coinTitle: String
    coinImg: String
    coinLink: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    favorites(username: String): User
    favorite(favoriteId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(coinTitle: String!, coinImg: String, coinLink: String): User
  }
`;

module.exports = typeDefs;
