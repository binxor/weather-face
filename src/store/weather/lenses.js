import * as R from 'ramda'

export const brightnessL = () => R.lensProp('brightness')
export const getBrightness = (state) => R.view(brightnessL(), state)

export const humidityL = () => R.lensProp('humidity')
export const getHumidity = (state) => R.view(humidityL(), state)

export const iconL = () => R.lensProp('icon')
export const getIcon = (state) => R.view(iconL(), state)

export const imageL = () => R.lensProp('image')
export const getImage = (state) => R.view(imageL(), state)

export const luxL = () => R.lensProp('lux')
export const getLux = (state) => R.view(luxL(), state)

export const pressureL = () => R.lensProp('pressure')
export const getPressure = (state) => R.view(pressureL(), state)

export const nameL = () => R.lensProp('name')
export const getName = (state) => R.view(nameL(), state)

export const temperatureL = () => R.lensProp('temperature')
export const getTemperature = (state) => R.view(temperatureL(), state)

export const uviL = () => R.lensProp('uvi')
export const getUvi = (state) => R.view(uviL(), state)