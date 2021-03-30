import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

const useStyles = makeStyles(theme => ({
}))


const Weather = (props) => {
  const { color, size } = props

  const [icon, setIcon] = useState('PARTLY_CLOUDY_DAY')

  const classes = useStyles()

  return (
    <>
      <WeatherIcon icon={icon} size={size} color={color} animate={true} />
    </>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Weather)
export default Weather