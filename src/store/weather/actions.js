import * as types from './types'
import * as helpers from './helpers'

const USE_MOCK_DATA = true

const PNW_LAT = 37.714135
const PNW_LON = -122.499271

// TODO - integrate API
const ambilobe_ex = {data: { "lat": -13.2026, "lon": 49.0514, "timezone": "Indian/Antananarivo", "timezone_offset": 10800, "current": { "dt": 1617500147, "sunrise": 1617504513, "sunset": 1617547479, "temp": 71.56, "feels_like": 72.79, "pressure": 1012, "humidity": 93, "dew_point": 69.44, "uvi": 0, "clouds": 13, "visibility": 10000, "wind_speed": 3.27, "wind_deg": 109, "wind_gust": 3.36, "weather": [ { "id": 801, "main": "MOCK Clouds", "description": "few clouds", "icon": "02n" } ] } }}
const home_ex = {data: { "lat": PNW_LAT, "lon": PNW_LON, "timezone": "America/Los_Angeles", "timezone_offset": -25200, "current": { "dt": 1617500522, "sunrise": 1617457508, "sunset": 1617504000, "temp": 68, "feels_like": 66.09, "pressure": 1019, "humidity": 34, "dew_point": 38.62, "uvi": 0.11, "clouds": 1, "visibility": 10000, "wind_speed": 5.75, "wind_deg": 310, "weather": [ { "id": 800, "main": "MOCK Clear", "description": "clear sky", "icon": "01d" } ] }, "minutely": [ { "dt": 1617500580, "precipitation": 0 }, { "dt": 1617500640, "precipitation": 0 }, { "dt": 1617500700, "precipitation": 0 }, { "dt": 1617500760, "precipitation": 0 }, { "dt": 1617500820, "precipitation": 0 }, { "dt": 1617500880, "precipitation": 0 }, { "dt": 1617500940, "precipitation": 0 }, { "dt": 1617501000, "precipitation": 0 }, { "dt": 1617501060, "precipitation": 0 }, { "dt": 1617501120, "precipitation": 0 }, { "dt": 1617501180, "precipitation": 0 }, { "dt": 1617501240, "precipitation": 0 }, { "dt": 1617501300, "precipitation": 0 }, { "dt": 1617501360, "precipitation": 0 }, { "dt": 1617501420, "precipitation": 0 }, { "dt": 1617501480, "precipitation": 0 }, { "dt": 1617501540, "precipitation": 0 }, { "dt": 1617501600, "precipitation": 0 }, { "dt": 1617501660, "precipitation": 0 }, { "dt": 1617501720, "precipitation": 0 }, { "dt": 1617501780, "precipitation": 0 }, { "dt": 1617501840, "precipitation": 0 }, { "dt": 1617501900, "precipitation": 0 }, { "dt": 1617501960, "precipitation": 0 }, { "dt": 1617502020, "precipitation": 0 }, { "dt": 1617502080, "precipitation": 0 }, { "dt": 1617502140, "precipitation": 0 }, { "dt": 1617502200, "precipitation": 0 }, { "dt": 1617502260, "precipitation": 0 }, { "dt": 1617502320, "precipitation": 0 }, { "dt": 1617502380, "precipitation": 0 }, { "dt": 1617502440, "precipitation": 0 }, { "dt": 1617502500, "precipitation": 0 }, { "dt": 1617502560, "precipitation": 0 }, { "dt": 1617502620, "precipitation": 0 }, { "dt": 1617502680, "precipitation": 0 }, { "dt": 1617502740, "precipitation": 0 }, { "dt": 1617502800, "precipitation": 0 }, { "dt": 1617502860, "precipitation": 0 }, { "dt": 1617502920, "precipitation": 0 }, { "dt": 1617502980, "precipitation": 0 }, { "dt": 1617503040, "precipitation": 0 }, { "dt": 1617503100, "precipitation": 0 }, { "dt": 1617503160, "precipitation": 0 }, { "dt": 1617503220, "precipitation": 0 }, { "dt": 1617503280, "precipitation": 0 }, { "dt": 1617503340, "precipitation": 0 }, { "dt": 1617503400, "precipitation": 0 }, { "dt": 1617503460, "precipitation": 0 }, { "dt": 1617503520, "precipitation": 0 }, { "dt": 1617503580, "precipitation": 0 }, { "dt": 1617503640, "precipitation": 0 }, { "dt": 1617503700, "precipitation": 0 }, { "dt": 1617503760, "precipitation": 0 }, { "dt": 1617503820, "precipitation": 0 }, { "dt": 1617503880, "precipitation": 0 }, { "dt": 1617503940, "precipitation": 0 }, { "dt": 1617504000, "precipitation": 0 }, { "dt": 1617504060, "precipitation": 0 }, { "dt": 1617504120, "precipitation": 0 }, { "dt": 1617504180, "precipitation": 0 } ] }}

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

export const getWeatherAtLocale = (location) => async (dispatch) => {
  let data

  // TODO - getWeatherAtHabitat assign different metrics
  if (USE_MOCK_DATA == true) {
    switch (location) {
      case 'ambilobe':
        data = { ...ambilobe_ex, city: 'Ambilobe, Madagascar' }
        break
      case 'pnw':
      default:
        data = { ...home_ex, city: 'Home' }
        break
    }
  } else {
    data = await helpers.getWeatherFromApi(location)
  }

  // TODO - acount for bad response from PROXY-WEATHER_API
  const formattedData = helpers.formatWeatherData(data)

  dispatch({
    type: types.WEATHER_REQUEST,
    payload: { ...formattedData, locale: location }
  })

  return formattedData
}