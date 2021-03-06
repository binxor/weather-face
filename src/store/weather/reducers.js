import * as R from 'ramda'
import * as types from './types'

const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true' || process.env.REACT_APP_USE_MOCK_DATA === true

const initialState = { //TODO - populate from source
  brightness: '-',
  humidity: 0,
  icon: 'CLEAR_DAY',
  lux: 0,
  name: '-',
  pressure: 0,
  temperature: 0,
  uvi: 0,
  completedRequest: false,
  useMockData: USE_MOCK_DATA,
  // TODO - initialize additional metrics
  timeOfDay: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PHASE:
      return {
        ...state,
        timeOfDay: action.payload.timeOfDay,
        image: action.payload.image,
      }
    case types.UPDATE_INDICATORS:
      return {
        ...state,
        indicators: action.payload
      }
    case types.UPDATE_CURRENT_FORECAST:
      let updatedForecast = action.payload
      return {
        ...state,
        ...updatedForecast
      }
    case types.WEATHER_REQUEST:
      return {
        ...state,
        completedRequest: false,
        locale: action.payload
        // ...action.payload // TODO - clear redux `response`
      }
    case types.WEATHER_REQUEST_FAILED:
      return {
        ...state,
        ...action.payload,
        completedRequest: true
      }
    case types.WEATHER_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        completedRequest: true
      }
    default:
      return state
  }
}

export default reducer