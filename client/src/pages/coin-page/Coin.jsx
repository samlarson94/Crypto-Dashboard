// Dev Note (SL) - How to get rid of HTML tags inside of description?

import axios from "axios";
import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from "react"
import { Favoritebtn } from './favoritebtn/Favoritebtn'

// Add CSS file
import './coins.css'

const Coin = () => {
    
    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
    }).catch((error) => {
        console.log(error)
    })
    
}, )

return (
    <div>
        <h1>{coin.id}</h1>
        <div className='coininfo-container'>
            <div className='content-card'>
                <h1>{coin.name}</h1>
            </div>
            <div className='content-card'>
                <div className = 'coin-rank'>
                    <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                </div>
                <div className="favorite__coin__btn">
                    <Favoritebtn />
                </div>
                <div className="coin-info">
                    <div className="coin-header">
                        {coin.image ? <img className="coin-logo" src={coin.image.small} alt='' /> : null}
                        <p>{coin.name}</p>
                        <p>${coin.symbol}</p>
                    </div>
                    <div className='coin-price'>
                        {coin.market_data?.current_price.usd ? <h1>${coin.market_data.current_price.usd}</h1> : null}
                    </div>
                </div>
            </div>

            <div className="content-card">
                <table>
                    <thead>
                        <tr>
                            <th>1hr</th>
                            <th>24hr</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_1yr_in_currency ? <p>{coin.market_data.price_change_percentage_1yr_in_currency.usd}</p> : null}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='content-card'>
                <div className='coin-stats'>
                    <div className="left-side">
                        <div className="row">
                            <h4>24 Hour Low</h4>
                            {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd}</p> : null}
                        </div>
                        <div className="row">
                            <h4>24 Hour High</h4>
                            {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd}</p> : null}
                        </div>
                    </div>
                    <div className="right-side">
                    <div className="row">
                            <h4>Market Cap</h4>
                            {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd}</p> : null}
                        </div>
                        <div className="row">
                            <h4>Circulating Supply</h4>
                            {coin.market_data ? <p>${coin.market_data.circulating_supply}</p> : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <div className="coin-information">
                    <h3>About {coin.name}</h3>
                    <p>{coin.description ? coin.description.en : ''}</p>

                </div>
            </div>
        </div>
    </div>
)
}

export default Coin