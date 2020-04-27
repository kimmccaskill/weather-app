const request = require('request')

const weatherstackUrl = 'http://api.weatherstack.com/current?access_key=a1f93f99215f7080692e1d88d3d76c43&query=39.747319,-104.978183&units=f'

request({ url: weatherstackUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    const currentTemp = response.body.current.temperature
    const feelsLike = response.body.current.feelslike
    console.log(response.body.current.weather_descriptions[0] + `. It is currently ${currentTemp} degrees and feels like ${feelsLike}`)
  }
})

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2ltbWNjYXNraWxsIiwiYSI6ImNrOWh1b3I3bDB2M2YzbG8ydTNudWJpdnYifQ.XFa8AZvwJRL-9tHAWk2eLA&limit=1'

request({ url: mapboxUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather services')
  } else if (!response.body.features.length) {
    console.log('Unable to find location. Try again with different search')
  } else {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log(lat, long)
  }
})