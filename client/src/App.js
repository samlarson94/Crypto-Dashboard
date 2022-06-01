import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ApolloProvider, selectHttpOptionsAndBodyInternal } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login-page/Loginpage'
import Signup from './pages/signup/Signup'
import Profile from './pages/profile/Profile'
import CoinList from './pages/coin-page/CoinList';
//import Footer from './components/footer';
//import Error__Page from './pages/errorPage/errorPage'


function App() {

  const [coins, setCoins] = useState([])
  // Coingecko API for top 10 cryptocurrencies ranked by market cap
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
    }, [])

  return (

    <ApolloProvider client={ApolloClient}>
      <Router>
            <Routes>
              <Route path ='/' element={<Home />} />
              <Route path ='/coins' element={<CoinList coins={coins} />} />
              {/* <Route path='/coins/:coinId' element={<Coin />} /> */}
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path ='/profile' element={<Profile/>}/>
              {/* Error page route, must be last route */}
              <Route path='*' element={<Home />} />
            </Routes>
            {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App