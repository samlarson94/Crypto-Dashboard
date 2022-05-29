import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Profile />
    </>
  )
}

export default App