import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getCloudiness, getDisplayName, getIcon, getIconUrl, getName, getTimeOfDay } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
}))


const Weather = (props) => {
  const { cloudiness, color, displayName, name, size, icon, iconUrl, timeOfDay } = props

  const [ img, setImg ] = useState(icon)
  const [ cloudPc, setCloudPc ] = useState(0)

  const classes = useStyles()

  useEffect(()=> {
    console.log({name, displayName})
    if (cloudiness > 0 && name === 'Clouds') {
      setCloudPc(cloudiness)
    }
  }, [cloudiness, name])

  return (
    <>
      {/* <WeatherIcon key={icon} icon={icon} size={size} color={color} animate={true} /> */}
      <img src={iconUrl} size={size} />
      <br/>
      {displayName} {cloudPc > 0 && <span><small>{cloudPc} %</small></span>} {!['day', 'night'].includes(timeOfDay) ? timeOfDay : ''}
    </>
  )
}

const mapStateToProps = (state) => ({
  cloudiness: getCloudiness(state.weather),
  displayName: getDisplayName(state.weather),
  name: getName(state.weather),
  icon: getIcon(state.weather),
  iconUrl: getIconUrl(state.weather),
  timeOfDay: getTimeOfDay(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)