import * as R from 'ramda'
import moment from 'moment-timezone'

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY
const DEFAULT_LAT = process.env.REACT_APP_DEFAULT_LAT
const DEFAULT_LON = process.env.REACT_APP_DEFAULT_LON

const LOCAL_PROXY = process.env.REACT_APP_LOCAL_PROXY
const AMBILOBE_LAT = process.env.REACT_APP_AMBILOBE_LAT
const AMBILOBE_LON = process.env.REACT_APP_AMBILOBE_LON

// TODO - add additional atmo conditions
export const IMAGE_MAP = {
  dawn: {
    clear: [ 'dawn-clear-2' ],
    cloudy: [ 'dawn-clear-1' ],
    default: [ 'unique-day-red-haze' ],
    // fog: [],
    storm: [ 'unique-red-moon' ], // TODO - replace
  },
  day: {
    clear: [ 'day-clear-1', 'day-clear-3', 'day-clear-4' ],
    cloudy: [ 'day-cloudy-10pc', 'day-cloudy-30pc', 'day-cloudy-40pc',
      'day-cloudy-50pc', 'day-cloudy-60pc', 'day-cloudy-70pc',
      'day-cloudy-80pc', 'day-cloudy-90pc', 'day-cloudy-100pc' ],
    default: [ 'unique-day-glare' ], // TODO
    fog: [ 'day-fog' ],
    storm: [ 'day-dark-clouds-1', 'day-dark-clouds-2' ],
  },
  default: [ 'default-1', 'default-2' ],
  night: {
    clear: [ 'night-clear-1' ],
    cloudy: [ 'night-cloudy-1' ],
    default: [ 'night-moonless', 'unique-red-moon' ],
    // fog: [],
    storm: [ 'night-thunderstorm-1', 'night-thunderstorm-2' ]
  },
  sunrise: {
    clear: [ 'unique-red-moon' ], // TODO - replace
    cloudy: [ 'sunrise-clouds-1' ],
    default: [], // TODO
    // fog: [],
    storm: [ 'unique-red-moon' ], // TODO - replace
  },
  sunset: {
    clear: [ 'unique-red-moon' ], // TODO - replace
    cloudy: [ 'sunset-clouds-1', 'sunset-clouds-2' ],
    default: [ 'unique-red-moon' ], // TODO - replace
    // fog: [],
    storm: [ 'sunset-thunderstorm-1' ]
  },
  twilight: {
    clear: [ 'twilight-clear-1' ],
    cloudy: [ 'unique-red-moon' ], // TODO - replace
    default: [ 'twilight-mist' ], // TODO
    // fog: [],
    storm: [ 'unique-red-moon' ], // TODO - replace
  },
}

export const CONDITION_DISPLAY_NAME_MAP = {
  // "Ash":          '',
  "Clear": 'Clear',
  "Clouds": 'Cloudy',
  "Drizzle": 'Drizzle',
  // "Dust":         '',
  // "Haze":         '',
  // "Main":         '',
  // "Mist":         '',
  "Rain": 'Rainy',
  // "Smoke":        '',
  // "Snow":         '',
  // "Squall":       '',
  "Thunderstorm": 'Thunderstorm',
  // "Tornado":      ''
}

export const CONDITION_MAP = {
  // "Ash":          '',
  "Clear": 'clear',
  "Clouds": 'cloudy',
  "Drizzle": 'storm',
  // "Dust":         '',
  // "Haze":         '',
  // "Main":         '',
  // "Mist":         '',
  "Rain": 'storm',
  // "Smoke":        '',
  // "Snow":         '',
  // "Squall":       '',
  "Thunderstorm": 'storm',
  // "Tornado":      ''
}

export const KNOWN_PHASES = [ 'dawn', 'day', 'night', 'sunrise', 'sunset', 'twilight' ]

const buildOWMIconUrl = key => 'http://openweathermap.org/img/wn/' + key + '@2x.png'

const formatResponseDailyForecast = ({ daily, sunset, sunrise, timeZone }) => {
  let formattedDaily = []
  daily.map(d => {
    formattedDaily.push({
      timestampRequested: d.dt,
      type: 'daily',
      cloudiness: d.clouds,
      dewPoint: d.dew_point,
      displayName: generateDisplayName(d.weather[ 0 ].main, d.clouds),
      feelsLikeObj: d.feels_like, // TODO: handle phase obj?
      humidity: d.humidity,
      iconUrl: buildOWMIconUrl(d.weather[ 0 ].icon),
      // image: ... // TODO
      name: d.weather[ 0 ].main,
      precipProb: d.pop, // NEW
      pressure: d.pressure,
      rain: d.rain, // NEW
      sunset: d.sunset, // NEW
      sunrise: d.sunrise,  // NEW
      temperatureObj: d.temp, // TODO: handle (larger) phase obj?
      temperatureMin: d.temp.min,
      uvi: d.uvi,
      visibility: d.visibility,
      windDegrees: d.wind_deg,
      windGust: d.wind_gust,
      windSpeed: d.wind_speed,
     
    })
  })

  return formattedDaily
}

const formatResponseHourlyForecast = ({ hourly, sunset, sunrise, timeZone }) => {
  let formattedHourly = []

  hourly.map(h => {
    let pointInTimeMs = moment(h.dt * 1000).tz(timeZone).unix() * 1000
    let timeOfDay = calculateForcastedTimeOfDay({
      pointInTimeMs: pointInTimeMs,
      sunriseMs: sunrise, // TODO - these should change by the day within 24 hour forecast
      sunsetMs: sunset // TODO - these should change by the day within 24 hour forecast
    })
    let ts_tz = moment(moment().tz(timeZone).unix() * 1000)
    let ts_rise = moment(sunrise).tz(timeZone)
    let ts_set = moment(sunset).tz(timeZone)
    let minutesTilSunrise = ts_rise.diff(ts_tz, 'minutes')
    let minutesTilSunset = ts_set.diff(ts_tz, 'minutes')
    formattedHourly.push({
      timestampTopOfHour: pointInTimeMs,
      type: 'hourly',
      cloudiness: h.clouds,
      dewPoint: h.dew_point,
      displayName: generateDisplayName(h.weather[ 0 ].main, h.clouds),
      feelsLike: h.feels_like,
      humidity: h.humidity,
      iconUrl: buildOWMIconUrl(h.weather[ 0 ].icon),
      image: mapImageByDesc({ desc: h.weather[ 0 ].main, phase: timeOfDay }),
      name: h.weather[ 0 ].main,
      pressure: h.pressure,
      temperature: h.temp,
      timeOfDay: timeOfDay,
      uvi: h.uvi,
      visibility: h.visibility,
      windDegrees: h.wind_deg,
      windGust: h.wind_gust,
      windSpeed: h.wind_speed

    })
  })
  return formattedHourly
}

const formatResponseCurrentForecast = (data) => {
  let formattedCurrent = []
  let sunrise = data.current.sunrise * 1000
  let sunset = data.current.sunset * 1000
  let timeOfDay = calculateForcastedTimeOfDay({
    pointInTimeMs: moment().tz(data.timezone).unix() * 1000,
    sunriseMs: sunrise,
    sunsetMs: sunset
  })
  let timeZone = data.timezone
  if (data.current) {
    formattedCurrent = {
      cloudiness: data.current.clouds, // % // TODO - map to images?
      dewPoint: data.current.dewPoint, // convert
      displayName: generateDisplayName(data.current.weather[ 0 ].main, data.current.clouds),
      feelsLike: data.current.feels_like, // convert
      forecast: {
        hourly: [],
        daily: []
      },
      hourlyIndex: 1,
      iconUrl: buildOWMIconUrl(data.current.weather[ 0 ].icon), // TODO - replace these icons
      image: mapImageByDesc({ desc: data.current.weather[ 0 ].main, phase: timeOfDay }),
      indicators: generateIndicators({ data }),
      lat: data.lat,
      lon: data.lon,
      sunrise: sunrise,
      sunset: sunset,
      timeOfDay: timeOfDay,
      timestampSunrise: moment(sunrise).tz(data.timezone).unix(),
      timestampSunset: moment(sunset).tz(data.timezone).unix(),
      timeZone: timeZone,
      timeZoneOffset: data.timezone_offset,
      visibility: data.current.visibility, // convert m -> mi
      // brightness: '',
      humidity: data.current.humidity,
      // icon: 'CLEAR_DAY',
      // lux: 1580.65,
      name: data.current.weather[ 0 ].main,
      pressure: Math.round(100 * data.current.pressure / 1013.25) / 100, //convert hPa -> ATMO
      temperature: data.current.temp,
      uvi: data.current.uvi,
      windSpeed: data.current.wind_speed,
      windDegrees: data.current.wind_deg,
      windGust: data.current.wind_gust,
      // "weather": [ { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" } ]
    }
  }

  return [ formattedCurrent, sunset, sunrise, timeZone ]
}

export const formatTimeFromUnixMs = (timestampMs) => {
  return moment(timestampMs).format('HH:mm')
}

export const formatResponseWeatherData = (body) => {
  let formattedData

  try {
    let response = body.data
    let sunrise
    let sunset
    let timeZone

    [ formattedData, sunset, sunrise, timeZone ] = formatResponseCurrentForecast(response)

    if (response.hourly) formattedData.forecast.hourly = formatResponseHourlyForecast({ hourly: response.hourly, sunset, sunrise, timeZone })
    if (response.daily) formattedData.forecast.daily = formatResponseDailyForecast({ daily: response.daily, sunset, sunrise, timeZone })
  } catch (e) {
    console.log({ e })
  }

  return formattedData
}

export const generateDisplayName = (name, cloudiness) => {
  let title = ''
  let label = CONDITION_DISPLAY_NAME_MAP[ name ] || ' '
  if (name === 'Clouds') {
    if (cloudiness > 90) title = 'Cloudy'
    else if (cloudiness > 70) title = 'Mostly Cloudy'
    else if (cloudiness > 50) title = 'Partly Cloudy'
    else if (cloudiness > 30) title = 'A Little Cloudy'
    else if (cloudiness > 10) title = 'A Few Clouds'
    else title = 'Not Cloudy'
  } else {
    title = label
  }
  return title
}

export const generateIndicators = ({ data }) => {
  let temperature, humidity, hour, index
  let { hourly, timezone } = data

  if (hourly && hourly.length > 0 && timezone) {
    let nowLocale = moment().tz(timezone).unix()
    for (let i=0; i < hourly.length - 1; i++) {
      let isCorrectHour = nowLocale >= hourly[i]['dt'] && nowLocale < hourly[i+1]['dt']
      if (isCorrectHour) {
        index = i
        hour = moment(hourly[i]['dt']*1000).toString()
        temperature = hourly[i+1]['temp'] - hourly[i]['temp'] > 0 ? 'up' : 'down'
        humidity = hourly[i+1]['humidity'] - hourly[i]['humidity'] > 0 ? 'up' : 'down'
        break
      }
    }
  }
  return { temperature, humidity, hour, index }
}

export const generateUrl = (locale) => {
  let lat, lon
  if (locale == 'ambilobe') { lat = AMBILOBE_LAT; lon = AMBILOBE_LON }
  if (locale == DEFAULT_CITY) { lat = DEFAULT_LAT; lon = DEFAULT_LON }

  return LOCAL_PROXY.replace('{LAT}', lat).replace('{LON}', lon)
}

export const calculatePhase = ({ toSunset, toSunrise, forecastedTimestamp }) => {
  let phase
  let x = 1
  if (toSunrise > 40 * x) phase = 'night'
  else if (toSunrise > 20 * x) phase = 'dawn'
  else if (toSunrise > -20 * x) phase = 'sunrise'
  else if (toSunset > 40 * x) phase = 'day'
  else if (toSunset > 20 * x) phase = 'sunset'
  else if (toSunset > -20 * x) phase = 'twilight'
  else phase = 'night'

  return phase
}

export const calculateForcastedTimeOfDay = ({ pointInTimeMs, sunriseMs, sunsetMs, useMilliseconds }) => {
  const toSunrise = (sunriseMs - pointInTimeMs) / 60000
  const toSunset = (sunsetMs - pointInTimeMs) / 60000
  let phase = calculatePhase({ toSunset, toSunrise, forecastedTimestamp: pointInTimeMs })
  return phase
}

export const mapBrightness = (lux) => {
  let brightness = '-'
  if (lux > 32000) brightness = 'Bright'
  else if (lux > 10000) brightness = 'Clear'
  else if (lux > 500) brightness = 'Overcast'
  else if (lux > 400) brightness = 'Sunrise'
  else if (lux > 300) brightness = 'Dim'
  else if (lux > 3) brightness = 'Twighlight'
  else if (lux > 0.05) brightness = 'Moonlight'
  else if (lux > 0.02) brightness = 'Cloudy'
  else brightness = 'Blackout'
  return brightness
}

export const mapIcon = (lux) => {
  let icon = '-'
  if (lux > 32000) icon = 'CLEAR_DAY'
  else if (lux > 10000) icon = 'PARTLY_CLOUDY_DAY'
  else if (lux > 1000) icon = 'CLOUDY'
  else if (lux > 400) icon = 'CLOUDY'
  else if (lux > 300) icon = 'CLOUDY'
  else if (lux > 3) icon = 'CLOUDY'
  else if (lux > 0.05) icon = 'CLEAR_NIGHT'
  else if (lux > 0.02) icon = 'PARTLY_CLOUDY_NIGHT'
  else icon = 'CLEAR_NIGHT'
  return icon
}

export const mapConditions = (desc) => {
  let useCondition = ''
  if (!Object.keys(CONDITION_MAP).includes(desc)) useCondition = 'default'
  else {
    useCondition = CONDITION_MAP[ desc ]
  }
  return useCondition
}

export const mapPhase = (phase) => {
  let usePhase = ''
  if (!KNOWN_PHASES.includes(phase)) usePhase = 'default'
  else {
    usePhase = phase
  }
  return usePhase
}

export const mapImagePhaseConditions = ({ desc, phase }) => {
  let image = ''

  let foundPhase = mapPhase(phase)
  let foundCond = mapConditions(desc)

  let imageArray = IMAGE_MAP[ foundPhase ][ foundCond ] ? IMAGE_MAP[ foundPhase ][ foundCond ] : IMAGE_MAP[ 'default' ]
  image = selectRandomImage(imageArray)
  if (!image) image = IMAGE_MAP[ 'default' ][ randomFloor(2) ]
  return './other/' + image + '.jpg'
}

export const mapImageByDesc = ({ desc, phase }) => {
  let image = mapImagePhaseConditions({ desc, phase })
  return image
}

const randomFloor = (length) => {
  return Math.floor(Math.random() * length)
}

const selectRandomImage = (choices) => {
  let randomImage = ''
  if (typeof choices === 'object') {
    randomImage = choices[ randomFloor(choices.length) ]
  }
  else {
    randomImage = choices
  }
  return randomImage
}