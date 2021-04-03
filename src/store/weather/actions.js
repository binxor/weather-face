import * as types from './types'
import * as helpers from './helpers'


const ambilobe_ex = {"lat":-13.2026,"lon":49.0514,"timezone":"Indian/Antananarivo","timezone_offset":10800,"current":{"dt":1617478296,"sunrise":1617418110,"sunset":1617461118,"temp":74.07,"feels_like":75.6,"pressure":1013,"humidity":94,"dew_point":72.23,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":3.24,"wind_deg":106,"wind_gust":3.8,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]}}
const home_ex = {
  "lat": 0,
  "lon": 0,
  "timezone": "America/Los_Angeles",
  "timezone_offset": -25200,
  "current": {
    "dt": 1617476516,
    "sunrise": 1617457508,
    "sunset": 1617504000,
    "temp": 55.83,
    "feels_like": 53.83,
    "pressure": 1021,
    "humidity": 58,
    "dew_point": 41.29,
    "uvi": 4.06,
    "clouds": 1,
    "visibility": 10000,
    "wind_speed": 3.44,
    "wind_deg": 0,
    "weather": [
      { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
    ]
  },
  "minutely": [
    { "dt": 1617476520, "precipitation": 0 },
    { "dt": 1617476580, "precipitation": 0 },
    { "dt": 1617476640, "precipitation": 0 },
    { "dt": 1617476700, "precipitation": 0 },
    { "dt": 1617476760, "precipitation": 0 },
    { "dt": 1617476820, "precipitation": 0 },
    { "dt": 1617476880, "precipitation": 0 },
    { "dt": 1617476940, "precipitation": 0 },
    { "dt": 1617477000, "precipitation": 0 },
    { "dt": 1617477060, "precipitation": 0 },
    { "dt": 1617477120, "precipitation": 0 },
    { "dt": 1617477180, "precipitation": 0 },
    { "dt": 1617477240, "precipitation": 0 },
    { "dt": 1617477300, "precipitation": 0 },
    { "dt": 1617477360, "precipitation": 0 },
    { "dt": 1617477420, "precipitation": 0 },
    { "dt": 1617477480, "precipitation": 0 },
    { "dt": 1617477540, "precipitation": 0 },
    { "dt": 1617477600, "precipitation": 0 },
    { "dt": 1617477660, "precipitation": 0 },
    { "dt": 1617477720, "precipitation": 0 },
    { "dt": 1617477780, "precipitation": 0 },
    { "dt": 1617477840, "precipitation": 0 },
    { "dt": 1617477900, "precipitation": 0 },
    { "dt": 1617477960, "precipitation": 0 },
    { "dt": 1617478020, "precipitation": 0 },
    { "dt": 1617478080, "precipitation": 0 },
    { "dt": 1617478140, "precipitation": 0 },
    { "dt": 1617478200, "precipitation": 0 },
    { "dt": 1617478260, "precipitation": 0 },
    { "dt": 1617478320, "precipitation": 0 },
    { "dt": 1617478380, "precipitation": 0 },
    { "dt": 1617478440, "precipitation": 0 },
    { "dt": 1617478500, "precipitation": 0 },
    { "dt": 1617478560, "precipitation": 0 },
    { "dt": 1617478620, "precipitation": 0 },
    { "dt": 1617478680, "precipitation": 0 },
    { "dt": 1617478740, "precipitation": 0 },
    { "dt": 1617478800, "precipitation": 0 },
    { "dt": 1617478860, "precipitation": 0 },
    { "dt": 1617478920, "precipitation": 0 },
    { "dt": 1617478980, "precipitation": 0 },
    { "dt": 1617479040, "precipitation": 0 },
    { "dt": 1617479100, "precipitation": 0 },
    { "dt": 1617479160, "precipitation": 0 },
    { "dt": 1617479220, "precipitation": 0 },
    { "dt": 1617479280, "precipitation": 0 },
    { "dt": 1617479340, "precipitation": 0 },
    { "dt": 1617479400, "precipitation": 0 },
    { "dt": 1617479460, "precipitation": 0 },
    { "dt": 1617479520, "precipitation": 0 },
    { "dt": 1617479580, "precipitation": 0 },
    { "dt": 1617479640, "precipitation": 0 },
    { "dt": 1617479700, "precipitation": 0 },
    { "dt": 1617479760, "precipitation": 0 },
    { "dt": 1617479820, "precipitation": 0 },
    { "dt": 1617479880, "precipitation": 0 },
    { "dt": 1617479940, "precipitation": 0 },
    { "dt": 1617480000, "precipitation": 0 },
    { "dt": 1617480060, "precipitation": 0 },
    { "dt": 1617480120, "precipitation": 0 }
  ]
}


export const getWeather = () => (dispatch) => {
  let response = {
    brightness: '-',
    humidity: 29.77,
    icon: 'CLEAR_DAY',
    lux: 1580.65,
    name: 'Sunny',
    pressure: 0.99,
    temperature: 83.41,
    uvi: 0.05
  }

  response.brightness = helpers.mapBrightness(response.lux)
  response.name = helpers.mapBrightness(response.lux)
  response.icon = helpers.mapIcon(response.lux)
  response.image = helpers.mapImage(response.lux)

  dispatch({
    type: types.WEATHER_REQUEST,
    payload: response
  })
}

export const getWeatherAtLocale = (location) => (dispatch) => {
  let data

  // TODO - getWeatherAtHabitat assign different metrics
  switch (location) {
    case 'ambilobe_ex':
      data = { ...ambilobe_ex, city: 'Ambilobe, Madagascar' }
      break
    case 'home_ex':
    default:
      data = { ...home_ex, city: 'Home' }
      break
  }

  const formattedData = helpers.formatWeatherData(data)

  dispatch({
    type: types.WEATHER_REQUEST,
    payload: formattedData
  })

  return formattedData
}