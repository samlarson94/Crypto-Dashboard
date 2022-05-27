import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import link

const App = () => {
  return (
    <>
        <Header />
        <Nav />
    </>
  )
}

export default App