import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation AddFavorite(
    $coinTitle: String!
    $coinImg: String
    $coinLink: String
  ) {
    addFavorite(coinTitle: $coinTitle, coinImg: $coinImg, coinLink: $coinLink) {
      favorites {
        coinTitle
        coinImg
        coinLink
      }
    }
  }
`;
