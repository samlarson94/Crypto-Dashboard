import React from 'react'
import './profile.css'
import Nav from '../../components/nav/Nav'


const Profile = () => {
  return (
    <header>
    <Nav />
    <div className='container profile__container'>
    <h1>Your Crypto Tracker!</h1>
        <h5>Here are your favorite coins!</h5>
    </div>
    </header>
  )
}

export default Profile