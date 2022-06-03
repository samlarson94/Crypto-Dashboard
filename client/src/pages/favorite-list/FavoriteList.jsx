import React from 'react';

const FavoriteList = ({ favorites = [] }) => {
  if (!favorites.length) {
    return <h3>No Favorites Yet</h3>;
  }

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
          favorites.map((favorite) => (
            <div key={favorite._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <p className="card-body">{favorites.coinTitle}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FavoriteList;