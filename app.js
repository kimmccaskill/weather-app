const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a1f93f99215f7080692e1d88d3d76c43&query=Denver&units=f'

request({ url, json: true }, (error, response) => {
  const currentTemp = response.body.current.temperature
  const feelsLike = response.body.current.feelslike
  console.log(response.body.current.weather_descriptions[0] + `. It is currently ${currentTemp} degrees and feels like ${feelsLike}`)
})