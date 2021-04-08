import * as types from './types'
import * as helpers from './helpers'
import axios from 'axios'
import { MOCK_RESPONSE_AMBILOBE, MOCK_RESPONSE_DEFAULT } from './mockReponse'

const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true' || process.env.REACT_APP_USE_MOCK_DATA === true

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY
const DEFAULT_LAT = process.env.REACT_APP_DEFAULT_LAT
const DEFAULT_LON = process.env.REACT_APP_DEFAULT_LON


export const changePhase = (phase) => (dispatch) => {
  dispatch({
    type: types.CHANGE_PHASE,
    payload: {
      timeOfDay: phase,
      image: helpers.mapImageByDesc({desc: 'Clear', phase})
    }
  })
}

export const getWeatherAtLocale = (location) => (dispatch) => {
  let data

  dispatch({
    type: types.WEATHER_REQUEST,
    payload: location
  })

  // TODO - getWeatherAtHabitat assign different metrics
  if (USE_MOCK_DATA == true) {
    let data, cityName
    switch (location) {
      case 'ambilobe':
        data = MOCK_RESPONSE_AMBILOBE
        cityName = 'Ambilobe, Madagascar'
        break
      case DEFAULT_CITY:
      default:
        data = MOCK_RESPONSE_DEFAULT
        cityName = DEFAULT_CITY
        break
    }

    const formattedData = helpers.formatWeatherData(data)

    dispatch({
      type: types.WEATHER_REQUEST_SUCCESS,
      payload: { ...formattedData, locale: cityName }
    })

    return Promise.resolve(formattedData)
  } else {
    const url = helpers.generateUrl(location)

    return axios.get(url)
      .then((res) => {
        // TODO - acount for bad response from PROXY-WEATHER_API
        const formattedData = helpers.formatWeatherData(res)
        dispatch({
          type: types.WEATHER_REQUEST_SUCCESS,
          payload: { ...formattedData, locale: location }
        })
      })
      .catch((e) => {
        console.log({ e })
        // TODO - acount for bad response from PROXY-WEATHER_API
        dispatch({
          type: types.WEATHER_REQUEST_FAILED,
          payload: { data: {} }
        })
      })
  }
}
