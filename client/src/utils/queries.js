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
query Favorites($username: String) {
  favorites(username: $username) {
    _id
    favorites {
      coinTitle
      coinImg
      coinLink
    }
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      favorites {
        _id
        coinTitle
        coinImg
        coinLink
      }
    }
  }
`;
