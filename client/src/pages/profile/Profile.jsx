import React from 'react'
import './profile.css'
import Nav from '../../components/nav/Nav'
import FavoriteList from '../favorite-list/FavoriteList'
import { useQuery } from '@apollo/client';
import { QUERY_FAVORITES } from '../../utils/queries';


const Profile = () => {
  const {data, loading} = useQuery(QUERY_FAVORITES, {
    variables:{
      username: localStorage.getItem("username")
    }
  });
  const favoritesData = data?.favorites || [];
  console.log(favoritesData.favorites)
  return (
    <main>
    <Nav />
    <div className='container profile__container'>
    <h1>React-Fi Crypto Tracker</h1>
        <h5>Here are your favorite coins!</h5>
    </div>
   
   <div className="favorites_container">
    <div className='profile__favorites'>
    {loading ? (
            <div>Loading...</div>
          ) : (
            <FavoriteList
              favorites={favoritesData.favorites}
            />
          )}
    </div>
    </div>
    </main>
  )
}

export default Profile