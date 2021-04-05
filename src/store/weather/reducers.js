import * as R from 'ramda'
import * as types from './types'

const initialState = { //TODO - populate from source
  brightness: '-',
  humidity: 0,
  icon: 'CLEAR_DAY',
  lux: 0,
  name: '-',
  pressure: 0,
  temperature: 0,
  uvi: 0,
  completedRequest: false
  // TODO - initialize additional metrics
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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