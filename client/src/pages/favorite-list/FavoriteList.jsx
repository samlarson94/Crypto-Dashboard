import React from 'react';

const FavoriteList = ({ favorites }) => {
  if (!favorites.length) {
    return <h3>No Favorites Yet</h3>;
  }
console.log("favlist", favorites[0].coinTitle);
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Favorites
      </h3>
      <div className="flex-row my-4">
        {favorites &&
            favorites.map((favorite,i) => (
            <div key={i} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <p className="card-body">hello {favorite.coinTitle}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FavoriteList;