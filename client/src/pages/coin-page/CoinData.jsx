import React from "react";
import "./coins.css"
import Nav from '../../components/nav/Nav'
import { GiRank3 } from 'react-icons/gi'

const CoinData = (props) => {
    return (
        <div className='container'>
            <div className="coin__list__rank">
                <h3><GiRank3 /> {props.coins.market_cap_rank}</h3>
            </div>
            <div className="coin__list__name">
                <h3>{props.coins.symbol.toUpperCase()}</h3>
            </div>
            <div className="grid-container">
                <div className="grid-child-coin-img">
                    <img src={props.coins.image} alt=''></img>
                </div>
                <div className="grid-child-currentprice">
                    <h3>${props.coins.current_price.toLocaleString()}</h3>
                </div>
                <div className="grid-child-price-change-percentage">
                    <h3>{props.coins.price_change_percentage_24h.toFixed(2)}%</h3>
                </div>
                <div className="grid-child-total-coin">
                    <h3>${props.coins.total_volume.toLocaleString()}</h3>
                </div>
                <div className="grid-child-market-cap">
                    <h3>${props.coins.market_cap.toLocaleString()}</h3>
                </div>
            </div>
            {/* <p>${props.coins.current_price.toLocaleString()}</p> */}
            {/* <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p> */}
            {/* <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p> */}
            {/* <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p> */}
        </div>
    )
}

export default CoinData