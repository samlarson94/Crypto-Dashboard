import React from "react";
import CoinData from "./CoinData"
import "./coins.css"
import { Link } from "react-router-dom";

const CoinList = (props) => {
    return (
        <div className='container'>
            <div className="heading">
                <p className='coin-name'>Coins</p>
                <p>Price</p>
                <p>24hr</p>
                <p>Volume</p>
                <p>Market Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} key={coins.id}>
                        <CoinData coins={coins} />
                    </Link>
                    
                )
            })}
        </div>
    )
}

export default CoinList