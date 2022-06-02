const { AuthenticationError } = require("apollo-server-express");
const { Crypto } = require("../models");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addFavorite: async (parent, { userId, favorite }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { favorites: favorite },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeFavorite: async (parent, { userId, favorite }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favorites: favorite } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
