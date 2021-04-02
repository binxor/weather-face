const IMAGE_MAP = {
  day: {
    clear: 'day-sky-blue1.jpeg',
    cloudy: [ 'day-sky-clouds3.jpeg', 'day-sky-clouds4.jpeg' ],
    fog: 'fog1.jpeg',
    storm: [ 'thunderstorm1.jpeg', 'thunderstorm3.jpeg' ],
  },
  transition: {
    suriseOrSunset: ['sunrise-clouds1.jpeg', 'sunset-clouds2.jpeg'],
    twilight: []
  },
  night: {
    clear: 'night-sky-stars2.jpeg  ',
    cloudy: 'night-sky-clouds2.jpeg',
  }
}

const IMAGE_MAP_MOBILE = {
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

export const mapBrightness = (lux) => {
  let brightness = '-'
  if (lux > 32000) brightness = 'Glare'
  else if (lux > 10000) brightness = 'Bright'
  else if (lux > 900) brightness = 'Overcast'
  else if (lux > 400) brightness = 'Sunrise'
  else if (lux > 300) brightness = 'Dim'
  else if (lux > 3) brightness = 'Twighlight'
  else if (lux > 0.05) brightness = 'Moonlight'
  else if (lux > 0.02) brightness = 'Starlight'
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
  else icon = 'Blackout'
  return icon
}

export const mapImage = (lux) => {
  let image = ''
  if (lux > 32000) image = selectRandomImage(IMAGE_MAP['day']['clear'])
  else if (lux > 10000) image = selectRandomImage(IMAGE_MAP['day']['cloudy'])
  else if (lux > 900) image = selectRandomImage(IMAGE_MAP['day']['cloudy'])
  else if (lux > 400) image = selectRandomImage(IMAGE_MAP['transition']['suriseOrSunset'])
  else if (lux > 300) image = selectRandomImage(IMAGE_MAP['transition']['twilight'])
  else if (lux > 3) image = selectRandomImage(IMAGE_MAP['transition']['twilight'])
  else if (lux > 0.05) image = selectRandomImage(IMAGE_MAP['night']['clear'])
  else if (lux > 0.02) image = selectRandomImage(IMAGE_MAP['night']['cloudy'])
  else image = selectRandomImage(IMAGE_MAP['transition']['twilight'])
  return './other/' + image
}

const selectRandomImage = (choices) => {
  let randomImage = ''
  console.log(typeof choices)
  if (typeof choices === 'object') {
    randomImage = choices[Math.floor(Math.random() * choices.length)]
  }
  else {
    randomImage = choices
  }
  return randomImage
}