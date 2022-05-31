import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from './pages/home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
=======
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import Footer from './components/footer';
>>>>>>> main




function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router>
<<<<<<< HEAD
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </Router>
    </ApolloProvider>
  )
=======
            <Nav />
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path ="/profile" element={<Profile/>}/>
            </Routes>
            <Footer />
      </Router>
    </ApolloProvider>
  );
>>>>>>> main
}

export default App