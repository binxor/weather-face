import * as R from 'ramda'
import * as types from './types'

const initialState = { //TODO - populate from source
  brightness: 'Bright',
  humidity: 33,
  icon: 'CLEAR_DAY',
  lux: 10000,
  name: 'Sunny',
  pressure: 0.99,
  temperature: 76,
  uvi: 2
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer