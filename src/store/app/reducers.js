import * as R from 'ramda'
import * as types from './types'
import { setReferenceDay, setReferenceHour } from './lenses'

const initialState = {
  device: {
    isMobile: window.innerWidth < 500 // TODO - make dynamic @ screen rotation
  },
  referenceTime: {
    day: null,
    hour: null,
    minute: null,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REFERENCE_DAY:
      let day = action.payload
      return {
        ...state,
        ...setReferenceDay(day, state)
      }
    case types.SET_REFERENCE_HOUR:
      let hour = action.payload
      return {
        ...state,
        ...setReferenceHour(hour, state)
      }
    default:
      return state
  }
}

export default reducer