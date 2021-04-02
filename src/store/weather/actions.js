import * as types from './types'
import * as helpers from './helpers'

export const getWeather = () => (dispatch) => {
  let response = {
    brightness: '-',
    humidity: 29.69,
    icon: 'CLEAR_DAY',
    lux: 912.90,
    name: 'Sunny',
    pressure: 0.99,
    temperature: 79.56,
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