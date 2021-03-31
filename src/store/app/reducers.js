import * as R from 'ramda'
import * as types from './types'

const initialState = {
  device: {
    isMobile: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer