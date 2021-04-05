import moment from 'moment-timezone'

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY
const DEFAULT_LAT = process.env.REACT_APP_DEFAULT_LAT
const DEFAULT_LON = process.env.REACT_APP_DEFAULT_LON

const LOCAL_PROXY = process.env.REACT_APP_LOCAL_PROXY
const AMBILOBE_LAT = process.env.REACT_APP_AMBILOBE_LAT
const AMBILOBE_LON = process.env.REACT_APP_AMBILOBE_LON

// TODO - all hig res, open license images
// TODO - add additional atmo conditions
const IMAGE_MAP = {
  day: {
    clear: [ 'day-sky-blue1.jpeg', 'day-sky-clouds4.jpeg' ],
    cloudy: [ 'day-sky-clouds3.jpeg' ],
    fog: 'fog1.jpeg',
    storm: [ 'thunderstorm1.jpeg', 'thunderstorm3.jpeg' ],
  },
  transition: {
    suriseOrSunset: [ 'sunrise-clouds1.jpeg', 'sunset-clouds2.jpeg' ],
    twilight: [ 'twilight.jpeg' ]
  },
  sunrise: {
    clear: [ 'sunrise-clouds1.jpeg', 'sunset-clouds2.jpeg' ],
    cloudy: [ 'twilight.jpeg' ]
  },
  sunset: {
    clear: [ 'sunrise-clouds1.jpeg', 'sunset-clouds2.jpeg' ],
    cloudy: [ 'twilight.jpeg' ]
  },
  night: {
    clear: 'night-sky-moonlight.jpeg',
    cloudy: 'night-sky-clouds2.jpeg',
    moonless: 'night-sky-stars2.jpeg',
  }
}

const IMAGE_MAP_MOBILE = { // TODO - set up device-dependent mobile image mapping
  day: {
    clear: [],
    cloudy: [ 'day-sky-clouds1.jpeg', 'day-sky-clouds2.jpeg' ],
    fog: [],
    storm: [ 'rain-sky1.jpeg', 'thunderstorm2.jpeg' ],
  },
  transition: {
    surise: 'sunrise-clouds2.jpeg',
    sunset: 'sunset-clouds1.jpeg',
    twilight: 'twilight1.jpeg'
  },
  night: {
    clear: 'night-sky-stars1.jpeg',
    cloudy: 'night-sky-clouds1.jpeg',
  }
}

export const formatWeatherData = (body) => {
  let formattedData

  try {
    let response = body.data

    let timeOfDay = getTimeOfDay({ now: moment().tz(response.timezone).unix(), sunrise: response.current.sunrise, sunset: response.current.sunset })

    // TODO - add hourly history/forecast?
    // TODO - add other measurements below to UI
    formattedData = {
      cloudiness: response.current.clouds, // % // TODO - map to images?
      dewPoint: response.current.dewPoint, // convert
      feelsLike: response.current.feels_like, // convert
      iconUrl: 'http://openweathermap.org/img/wn/' + response.current.weather[ 0 ].icon + '@2x.png', // TODO - replace these icons
      image: mapImageByDesc({ desc: response.current.weather[ 0 ].main, phase: timeOfDay }),
      lat: response.lat,
      lon: response.lon,
      sunrise: response.current.sunrise,
      sunset: response.current.sunset,
      timeOfDay: timeOfDay,
      timeZone: response.timezone,
      timeZoneOffset: response.timezone_offset,
      visibility: response.current.visibility, // convert m -> mi
      // brightness: '',
      humidity: response.current.humidity,
      // icon: 'CLEAR_DAY',
      // lux: 1580.65,
      name: response.current.weather[ 0 ].main,
      pressure: Math.round(100 * response.current.pressure / 1013.25) / 100, //convert hPa -> ATMO
      temperature: response.current.temp,
      uvi: response.current.uvi,
      windSpeed: response.current.wind_speed,
      windDegrees: response.current.wind_deg,
      windGust: response.current.wind_gust,
      // "weather": [ { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" } ]
    }
  } catch (e) {
    console.log({ e })
  }

  return formattedData
}

export const generateUrl = (locale) => {
  let lat, lon
  if (locale == 'ambilobe') { lat = AMBILOBE_LAT; lon = AMBILOBE_LON }
  if (locale == DEFAULT_CITY) { lat = DEFAULT_LAT; lon = DEFAULT_LON }

  return LOCAL_PROXY.replace('{LAT}', lat).replace('{LON}', lon)
}

export const getTimeOfDay = ({ now, sunrise, sunset }) => {
  let phase
  let threshold = 2000
  if (now > sunset + threshold) phase = 'night'
  else if (now >= sunset - threshold) phase = 'sunset'
  else if (now > sunrise + threshold) phase = 'day'
  else if (now >= sunrise - threshold) phase = 'sunrise'
  else phase = 'night'
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

export const mapImage = (lux) => {
  let image = ''
  if (lux > 32000) image = selectRandomImage(IMAGE_MAP[ 'day' ][ 'clear' ])
  else if (lux > 10000) image = selectRandomImage(IMAGE_MAP[ 'day' ][ 'cloudy' ])
  else if (lux > 500) image = selectRandomImage(IMAGE_MAP[ 'day' ][ 'cloudy' ])
  else if (lux > 400) image = selectRandomImage(IMAGE_MAP[ 'transition' ][ 'suriseOrSunset' ])
  else if (lux > 300) image = selectRandomImage(IMAGE_MAP[ 'transition' ][ 'twilight' ])
  else if (lux > 3) image = selectRandomImage(IMAGE_MAP[ 'transition' ][ 'twilight' ])
  else if (lux > 0.05) image = selectRandomImage(IMAGE_MAP[ 'night' ][ 'clear' ])
  else if (lux > 0.02) image = selectRandomImage(IMAGE_MAP[ 'night' ][ 'cloudy' ])
  else image = selectRandomImage(IMAGE_MAP[ 'night' ][ 'moonless' ])
  return './other/' + image
}

export const mapImageByDesc = ({ desc, phase }) => {
  let image = ''
  switch (desc) {
    case "Clear":
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'clear' ])
      break
    case "Clouds":
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'cloudy' ])
      break
    case "Drizzle":
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'storm' ])
      break
    case "Rain":
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'storm' ])
      break
    case "Snow":
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'storm' ])
      break
    case "Thunderstorm":
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'storm' ])
      break
    default:
      image = selectRandomImage(IMAGE_MAP[ phase ][ 'moonless' ])
      break;
  }
  // TODO  - map new atmo images to OWM descriptions below
  /*

  ID	Main	Description	Icon
  701	Mist	mist	 50d
  711	Smoke	Smoke	 50d
  721	Haze	Haze	 50d
  731	Dust	sand/ dust whirls	 50d
  741	Fog	fog	 50d
  751	Sand	sand	 50d
  761	Dust	dust	 50d
  762	Ash	volcanic ash	 50d
  771	Squall	squalls	 50d
  781	Tornado	tornado	 50d

  */
  return './other/' + image
}

const selectRandomImage = (choices) => {
  let randomImage = ''
  if (typeof choices === 'object') {
    randomImage = choices[ Math.floor(Math.random() * choices.length) ]
  }
  else {
    randomImage = choices
  }
  return randomImage
}