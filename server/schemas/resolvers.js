const { AuthenticationError } = require("apollo-server-express");

const { User, Favorite } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    favorites: async (user, { Favorite }) => {
      return User.find({ _id: [Favorite] });
    }
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

    addFavorite: async (parent, { coinTitle, coinImg, coinLink }, context) => {
      if (context.user) {
        // const favorite = {
        //   coinTitle,
        //   coinImg,
        //   coinLink,
        // };
        // });
        // console.log(favorite);
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              favorites: {
                coinTitle,
                coinImg,
                coinLink,
              },
            },
          }
        );
      }
      throw new AuthenticationError("youre not logged in");
    },
    // removeFavorite: async (parent, { userId, favorite }) => {
    //   return User.findOneAndUpdate(
    //     { _id: userId },
    //     { $pull: { favorites: favorite } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
