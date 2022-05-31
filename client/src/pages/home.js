import React from 'react'
import './header.css'
import homeIMG from '../../assets/home_image.png'
import Login from './Login'

const Home = () => {
  return (
    <header>
    <div className='container header__container'>
    <h1>Welcome to the Crypto Tracker!</h1>
        <h5>Here you can track your favorite coins!</h5>
        <Login />
        
        <div className='homeImage'>
            <img src={homeIMG} alt='homeimage' />
        </div>
    </div>
    </header>
  )
}

export default Home
