import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

/*
CLEAR_DAY
CLEAR_NIGHT
PARTLY_CLOUDY_DAY
PARTLY_CLOUDY_NIGHT
CLOUDY
RAIN
SLEET
SNOW
WIND
FOG
*/

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 512,
  animate: true
};

const WeatherIcon = (props) => {
  const { color, icon, size } = props

  return (
    <ReactAnimatedWeather
      // icon={defaults.icon}
      // color={defaults.color}
      // size={defaults.size}
      // animate={defaults.animate}
      icon={icon} size={size} color={color} animate={true}
    />
  )
}

export default WeatherIcon;