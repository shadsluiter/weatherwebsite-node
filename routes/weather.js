var express = require('express');
var router = express.Router();

const forecast = require('../utils/forecast')

/* GET users listing. */
router.get('/', function(req, res, next) {
    let address = req.query.address
    if (!address) {
        res.send("Please use an address.  ?adress=phoenix")
    } else {
            forecast(address, (error, message, weatherObject) => {
                if (error) {
                    return console.log(error)
                }
     
                res.render('weather', { 
                     location: weatherObject.location,
                     temperature: weatherObject.temperature,
                     precip: weatherObject.precip,
                     condition_description: weatherObject. weather_description 
                });
            })
    }
})

router.get('/:address', function(req, res, next) {
let address = req.params.address
    if (!address) {
        console.log('Please provide an address')
    } else {
            forecast(address, (error, message, weatherObject) => {
                if (error) {
                    return console.log(error)
                }
     
                res.render('weather', { 
                     location: weatherObject.location,
                     temperature: weatherObject.temperature,
                     precip: weatherObject.precip,
                     condition_description: weatherObject. weather_description 
                });
            })
    }
  } ) 
  router.get('/api/:address', function(req, res, next) {
    let address = req.params.address
        if (!address) {
            console.log('Please provide an address')
        } else {
                forecast(address, (error, message, weatherObject) => {
                    if (error) {
                        return console.log(error)
                    }
         
                    res.send({
                        data: weatherObject,
                        report: message}
                         );
                })
        }
      } ) 

module.exports = router;
