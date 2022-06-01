import axios from "axios";
import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from "react"

// Add CSS file

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
    
}, [])

return (
    <div>
        <h1>{coin.id}</h1>
    </div>
)
}

export default Coin