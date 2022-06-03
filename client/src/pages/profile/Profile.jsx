import React from 'react'
import './profile.css'
import Nav from '../../components/nav/Nav'
import CoinList from '../../components/coinInfo/CoinList'


const Profile = () => {
  return (
    <header>
    <Nav />
    <div className='container profile__container'>
    <h1>Your Crypto Tracker!</h1>
    <h5>Here are your favorite coins!</h5>
    <div className='favorites-list'>
      {/* <FavoriteList 
        
        /> */}
    </div>

    </div>
    < CoinList/>
    </header>
  )
}

export default Profile