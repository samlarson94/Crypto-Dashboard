import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_FAVORITES = gql`
  query getFavorites {
    username
    favorites {
      coinTitle
      coinImg
      coinLink
    }
  }
`;