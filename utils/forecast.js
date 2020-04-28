const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a1f93f99215f7080692e1d88d3d76c43&query=${latitude},${longitude}&units=f`

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service')
    } else if (response.body.error) {
      callback('Unable to find location')
    } else {
      const currentTemp = response.body.current.temperature
      const feelsLike = response.body.current.feelslike
      callback(undefined, response.body.current.weather_descriptions[0] + `. It is currently ${currentTemp} degrees and feels like ${feelsLike}`)
    }
  })
}

module.exports = forecast