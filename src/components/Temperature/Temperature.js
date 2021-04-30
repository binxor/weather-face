import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { CallMade } from '@material-ui/icons'
import { getTemperature, getTemperatureIndicator } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '2.2rem'
  }
}))

const Temperature = (props) => {
  const { temperature, temperatureIndicator } = props

  const classes = useStyles()
  const [ style, setStyle ] = useState({})

  useEffect(() => {
    if (temperatureIndicator === 'up') setStyle({})
    if (temperatureIndicator === 'down') setStyle({ transform: 'scaleY(-1)' })
  }, [ temperatureIndicator ])

  return (
    <div className={classes.text}>
      {temperature}
      <small>°  </small>
      {temperatureIndicator && <CallMade style={style} />}
    </div>
  )
}

const mapStateToProps = (state) => ({
  temperature: getTemperature(state.weather),
  temperatureIndicator: getTemperatureIndicator(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)