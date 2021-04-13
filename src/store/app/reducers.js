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
      let day = action.payload.day ? action.payload.day : moment(action.payload).format('DD')
      return {
        ...state,
        ...setReferenceDay(day, state)
      }
    case types.SET_REFERENCE_HOUR:
      let hour = action.payload.hour ? action.payload.hour : moment(action.payload).format('HH')
      return {
        ...state,
        ...setReferenceHour(hour, state)
      }
    case types.SET_REFERENCE_MINUTE:
      let minute = action.payload.minute ? action.payload.minute : moment(action.payload).format('mm')
      return {
        ...state,
        ...setReferenceMinute(minute, state)
      }
    case types.SET_REFERENCE_SECOND:
      let second = action.payload.second ? action.payload.second : moment(action.payload).format('ss')
      return {
        ...state,
        ...setReferenceSecond(second, state)
      }
    default:
      return state
  }
}

export default reducer