import React from 'react';
import './favoritelist.css'

const FavoriteList = ({ favorites }) => {
  if (!favorites.length) {
    return <h3>No Favorites Yet</h3>;
  }
  console.log("favlist", favorites[0].coinTitle);
  return (
    <>
      <div className="favorites__container">
        {favorites &&
          favorites.map((favorite, i) => (
            <div className="favorites__list" key={i}>
                <img src={favorite.coinImg} alt='coinImg' className='coin__img'></img>
                <p className='coin__title'>{favorite.coinTitle}</p>
                <p className='coin__price'>{favorite.current_price}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default FavoriteList;