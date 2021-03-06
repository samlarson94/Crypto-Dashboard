import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_FAVORITE } from "../../utils/mutations";

import "../favoritebtn/favoritebtn.css";

export function Favoritebtn(props) {
  console.log(props);
  const [addFavorite, { error }] = useMutation(ADD_FAVORITE);
  const handleClick = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      const { data } = await addFavorite({
        variables: {
          coinTitle: props.coin.name,
          coinImg: props.coin.image.small,
          coinLink: props.coin.id,
        },
      });
      console.log(data.addFavorite.favorites);
      // localStorage.setItem('favorites', data.addFavorite.favorites);
    } catch (error) {
      console.log(error);
    }
  };
  return <button className="favorite__coin__btn" onClick={handleClick}>Add To Favorites</button>;
}
