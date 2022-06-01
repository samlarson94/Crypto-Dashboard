import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login-page/Loginpage'
import Signup from './pages/signup/Signup'
import Profile from './pages/profile/Profile'
import Footer from './components/footer';
import Error__Page from './pages/errorPage/errorPage'




function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router>
            <Routes>
              <Route path ='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path ='/profile' element={<Profile/>}/>
              {/* Error page route, must be last route */}
              <Route path='*' element={<Error__Page />} />
            </Routes>
            {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App