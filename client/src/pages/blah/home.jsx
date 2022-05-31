import React from 'react'
import '../home/home.css'
import homeIMG from '../../assets/home_image.png'
import Login from '../Login'

const Home = () => {
  return (
    <div className='container header__container'>
    <h1>Welcome to the Crypto Tracker!</h1>
        <h5>Here you can track your favorite coins!</h5>
        <Login />
        
        <div className='homeImage'>
            <img src={homeIMG} alt='homeimage' />
        </div>
    </div>
  )
}

export default Home
