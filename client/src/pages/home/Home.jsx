import React from 'react'
import './home.css'
import homeIMG from '../../assets/1.png'
import Login from './Login'

const Home = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1>Welcome to React-Fi!</h1>
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
