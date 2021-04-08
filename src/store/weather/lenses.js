import * as R from 'ramda'

export const brightnessL = () => R.lensProp('brightness')
export const getBrightness = (state) => R.view(brightnessL(), state)

export const completedRequestL = () => R.lensProp('completedRequest')
export const getCompletedRequest = (state) => R.view(completedRequestL(), state)

export const displayNameL = () => R.lensProp('displayName')
export const getDisplayName = (state) => R.view(displayNameL(), state)

export const forecastL = () => R.lensProp('forecast')
export const getForecast = (state) => R.view(forecastL(), state)

export const humidityL = () => R.lensProp('humidity')
export const getHumidity = (state) => R.view(humidityL(), state)

export const iconL = () => R.lensProp('icon')
export const getIcon = (state) => R.view(iconL(), state)

export const iconUrlL = () => R.lensProp('iconUrl')
export const getIconUrl = (state) => R.view(iconUrlL(), state)

export const imageL = () => R.lensProp('image')
export const getImage = (state) => R.view(imageL(), state)

export const localeL = () => R.lensProp('locale')
export const getLocale = (state) => R.view(localeL(), state) 

export const luxL = () => R.lensProp('lux')
export const getLux = (state) => R.view(luxL(), state)

export const nameL = () => R.lensProp('name')
export const getName = (state) => R.view(nameL(), state)

export const pressureL = () => R.lensProp('pressure')
export const getPressure = (state) => R.view(pressureL(), state)

export const sunriseL = () => R.lensProp('sunrise')
export const getSunrise = (state) => R.view(sunriseL(), state)

export const sunsetL = () => R.lensProp('sunset')
export const getSunset = (state) => R.view(sunsetL(), state)

export const temperatureL = () => R.lensProp('temperature')
export const getTemperature = (state) => R.view(temperatureL(), state)

export const timeOfDayL = () => R.lensProp('timeOfDay')
export const getTimeOfDay = (state) => R.view(timeOfDayL(), state)

export const timeZoneOffsetL = () => R.lensProp('timeZoneOffset')
export const getTimeZoneOffset = (state) => R.view(timeZoneOffsetL(), state)

export const timeZoneL = () => R.lensProp('timeZone')
export const getTimeZone = (state) => R.view(timeZoneL(), state)

export const uviL = () => R.lensProp('uvi')
export const getUvi = (state) => R.view(uviL(), state)

// sublenses
export const hourlyForecastsL = () => R.compose(forecastL(), R.lensProp('hourly'))
export const getHourlyForecasts = (state) => R.view(hourlyForecastsL(), state)