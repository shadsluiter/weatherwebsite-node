const request = require('request')

const forecast = (location, callback) => {
    const key = '063a4ab66295c020145865a238e5aa5a'
    const url = 'http://api.weatherstack.com/current?access_key=063a4ab66295c020145865a238e5aa5a&units=f&query=' + location
    

    request( {url: url, json: true}, (error, response) => { 
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } 
        else if (response.body.error){
            callback(response.body.error.info, undefined)
        }
        else { 
            const {name: locationName, region  } = response.body.location
            const {temperature, precip, weather_descriptions} = response.body.current

            let message = "The current temperature at " + locationName + ", " + region + " is " + temperature + " degrees"

        message += " There is a " + precip + " percent of rain"
        message += " Current conditions are " + weather_descriptions[0]

        weatherObject = {
            location,
            temperature,
            precip,
            weather_description: weather_descriptions[0]
        }
    
        callback(undefined, message, weatherObject)
        }
    })
}
 

module.exports = forecast