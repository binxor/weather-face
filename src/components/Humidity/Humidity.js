import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { CallMade } from '@material-ui/icons'
import { getHumidity, getHumidityIndicator } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '2.2rem'
  }
}))

const Humidity = (props) => {
  const { humidity, humidityIndicator } = props

  const classes = useStyles()
  const [ style, setStyle ] = useState({})

  useEffect(() => {
    if (humidityIndicator === 'up') setStyle({})
    if (humidityIndicator === 'down') setStyle({ transform: 'scaleY(-1)' })
  }, [ humidityIndicator ])

  return (
    <div className={classes.text}>
      {humidity}
      <small>%  </small>
      {humidityIndicator && <CallMade style={style} />}
    </div>

  )
}

const mapStateToProps = (state) => ({
  humidity: getHumidity(state.weather),
  humidityIndicator: getHumidityIndicator(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Humidity)