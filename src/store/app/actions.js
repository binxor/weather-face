import * as types from './types'

export const updateCurrentForecast = (forecast) => (dispatch)=> {
  dispatch({
    type: types.UPDATE_CURRENT_FORECAST,
    payload: forecast
  })
}

export const updateRefDay = (val) => (dispatch) => {
  dispatch({
    type: types.SET_REFERENCE_DAY,
    payload: val
  })
}

export const updateRefHour = (val) => (dispatch) => {
  dispatch({
    type: types.SET_REFERENCE_HOUR,
    payload: val
  })
}

export const updateRefMinute = (val) => (dispatch) => {
  dispatch({
    type: types.SET_REFERENCE_MINUTE,
    payload: val
  })
}

export const updateRefSecond = (val) => (dispatch) => {
  dispatch({
    type: types.SET_REFERENCE_SECOND,
    payload: val
  })
}