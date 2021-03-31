import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { getHumidity } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '2.2rem'
  }
}))

const Humidity = (props) => {
  const { humidity } = props

  const classes = useStyles()

  return (
    <div className={classes.text}>{humidity}<small>%</small></div>
  )
}

const mapStateToProps = (state) => ({
  humidity: getHumidity(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Humidity)