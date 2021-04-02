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
  uvi: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WEATHER_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default reducer