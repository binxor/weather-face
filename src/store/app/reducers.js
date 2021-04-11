import * as R from 'ramda'
import * as types from './types'
import { setReferenceDay, setReferenceHour, setReferenceMinute, setReferenceSecond } from './lenses'
import * as moment from 'moment-timezone'

const initialState = {
  device: {
    isMobile: window.innerWidth < 500 // TODO - make dynamic @ screen rotation
  },
  referenceTime: {
    day: null,
    hour: null,
    minute: null,
    second: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REFERENCE_DAY:
      let day = action.payload ? action.payload : moment().format('DD')
      return {
        ...state,
        ...setReferenceDay(day, state)
      }
    case types.SET_REFERENCE_HOUR:
      let hour = action.payload ? action.payload : moment().format('HH')
      return {
        ...state,
        ...setReferenceHour(hour, state)
      }
    case types.SET_REFERENCE_MINUTE:
      let minute = action.payload ? action.payload : moment().format('mm')
      return {
        ...state,
        ...setReferenceMinute(minute, state)
      }
    case types.SET_REFERENCE_SECOND:
      let second = action.payload ? action.payload : moment().format('ss')
      return {
        ...state,
        ...setReferenceSecond(second, state)
      }
    case types.UPDATE_CURRENT_FORECAST:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer