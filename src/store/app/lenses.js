import * as R from 'ramda'

export const deviceL = () => R.lensProp('device')
export const getFiles = (state) => R.view(deviceL(), state)

export const isMobileL = () => R.compose(deviceL(), R.lensProp('isMobile'))
export const getIsMobile = (state) => R.view(isMobileL(), state)