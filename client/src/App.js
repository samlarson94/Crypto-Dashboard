import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login-page/Loginpage'
import Signup from './pages/signup/Signup'
import Profile from './pages/profile/Profile'
import CoinList from './pages/coin-page/CoinList';
import Footer from './components/footer';
import Coin from './pages/coin-page/Coin';
import Error__Page from './pages/errorPage/errorPage'

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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

    <ApolloProvider client={client}>
      <Router>
            <Routes>
              <Route path ='/' element={<Home />} />
              <Route path ='/coins' element={<CoinList coins={coins} />} />
              {/* <Route path='/coins/:coinId' element={<Coin />} /> */}
              <Route path='/coin' element={<Coin />}>
                <Route path=':coinId' element={<Coin />} />
              </Route>
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