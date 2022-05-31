import React from 'react'
import '../components/profile/profile.css'
import homeIMG from '../assets/home_image.png'


const Profile = () => {
  return (
    <header>
    <div className='container header__container'>
    <h1>Your Crypto Tracker!</h1>
        <h5>Here are your favorite coins!</h5>
        
        
        <div className='homeImage'>
            <img src={homeIMG} alt='homeimage' />
        </div>
    </div>
    </header>
  )
}

export default Profile