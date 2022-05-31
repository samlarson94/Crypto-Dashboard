import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import Footer from './components/footer';




function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router>
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
}

export default App