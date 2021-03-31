import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

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
  const { color, key, icon, size } = props

  return (
    <>
      <ReactAnimatedWeather key={key}
        icon={icon} size={size} color={color} animate={true}
      />
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherIcon)