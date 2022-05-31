import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';


const App = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App