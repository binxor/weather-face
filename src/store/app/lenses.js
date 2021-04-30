import * as R from 'ramda'

export const deviceL = () => R.lensProp('device')
export const getFiles = (state) => R.view(deviceL(), state)

export const referenceTimeL = () => R.lensProp('referenceTime')
export const getReferenceTime = (state) => R.view(referenceTimeL(), state)



// SUB LENSES
export const isMobileL = () => R.compose(deviceL(), R.lensProp('isMobile'))
export const getIsMobile = (state) => R.view(isMobileL(), state)

export const referenceDayL = () => R.compose(referenceTimeL(), R.lensProp('day'))
export const getReferenceDay = (state) => R.view(referenceDayL(), state)
export const setReferenceDay = (val, state) => R.set(referenceDayL(), val, state)

export const referenceHourL = () => R.compose(referenceTimeL(), R.lensProp('hour'))
export const getReferenceHour = (state) => R.view(referenceHourL(), state)
export const setReferenceHour = (val, state) => R.set(referenceHourL(), val, state)

export const referenceMinuteL = () => R.compose(referenceTimeL(), R.lensProp('minute'))
export const getReferenceMinute = (state) => R.view(referenceMinuteL(), state)
export const setReferenceMinute = (val, state) => R.set(referenceMinuteL(), val, state)

export const referenceSecondL = () => R.compose(referenceTimeL(), R.lensProp('second'))
export const getReferenceSecond = (state) => R.view(referenceSecondL(), state)
export const setReferenceSecond = (val, state) => R.set(referenceSecondL(), val, state)

