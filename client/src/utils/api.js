// const { query } = require('express');

// const router = require('express').Router();
// const axios = require('axios').default;
// //require('dotenv').config();
// const APIKEY = 'ceca1766451feb20d74fa3a3d0f2284d'

// //get list data on all (inital search)
// router.get('/', async (req, res) => {
//     var queryURL1 = `http://api.coinlayer.com/api/list?access_key=ceca1766451feb20d74fa3a3d0f2284d&"target:USD"`
//     axios.get(queryURL1)
//         .then(function (response) {
//             // handle success
//             let results = 
        
       
//         .catch(function (error) {
//             // handle error
//             console.log("Error");
//         })

//     })

//   //get live data on ONE symbol (profile page)
// router.get('/:symbols', async (req, res) => {
//     var queryURL2 = `http://api.coinlayer.com/api/live?access_key=ceca1766451feb20d74fa3a3d0f2284d&"target=USD"&symbols=BTC`
//     axios.get(queryURL2)
//         .then(function (response) {
//             // handle success
//             let results = 
        
       
//         .catch(function (error) {
//             // handle error
//             console.log("Error");
//         })

//     })
// }


// module.exports = router;
