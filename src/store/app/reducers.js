import * as R from 'ramda'
import * as types from './types'

const initialState = {
  device: {
    isMobile: window.innerWidth < 500 // TODO - make dynamic @ screen rotation

  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer