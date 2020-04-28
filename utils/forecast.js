const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a1f93f99215f7080692e1d88d3d76c43&query=${latitude},${longitude}&units=f`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} degrees and feels like ${body.current.feelslike}`)
    }
  })
}

module.exports = forecast