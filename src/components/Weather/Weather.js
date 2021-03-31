import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getIcon, getName } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
}))


const Weather = (props) => {
  const { color, name, size, icon } = props

  const [ img, setImg ] = useState(icon)

  const classes = useStyles()

  return (
    <>
      <WeatherIcon key={icon} icon={icon} size={size} color={color} animate={true} />
      <br/>
      {name}
    </>
  )
}

const mapStateToProps = (state) => ({
  name: getName(state.weather),
  icon: getIcon(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)