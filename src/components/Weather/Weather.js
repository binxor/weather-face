import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDisplayName, getIcon, getIconUrl, getName, getTimeOfDay } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
}))


const Weather = (props) => {
  const { color, displayName, name, size, icon, iconUrl, timeOfDay } = props

  const [ img, setImg ] = useState(icon)

  const classes = useStyles()

  return (
    <>
      {/* <WeatherIcon key={icon} icon={icon} size={size} color={color} animate={true} /> */}
      <img src={iconUrl} size={size} />
      <br/>
      {displayName} {!['day', 'night'].includes(timeOfDay) ? timeOfDay : ''}
    </>
  )
}

const mapStateToProps = (state) => ({
  displayName: getDisplayName(state.weather),
  name: getName(state.weather),
  icon: getIcon(state.weather),
  iconUrl: getIconUrl(state.weather),
  timeOfDay: getTimeOfDay(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)