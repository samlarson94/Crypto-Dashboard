import React from 'react'
import './profile.css'
import Nav from '../../components/nav/Nav'
import FavoriteList from '../favorite-list/FavoriteList'
import { useQuery } from '@apollo/client';
import { QUERY_FAVORITES } from '../../utils/queries';


const Profile = () => {
  const data = useQuery(QUERY_FAVORITES);
  const favorites = data?.favorites || [];
  console.log(data)
  return (
    <header>
    <Nav />
    <div className='container profile__container'>
    <h1>Your Crypto Tracker!</h1>
        <h5>Here are your favorite coins!</h5>
    </div>
    <div className='profile__favorites'>
    {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <FavoriteList
              favorites={favorites}
            />
          )} */}
    </div>
    </header>
  )
}

export default Profile