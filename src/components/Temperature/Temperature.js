import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { getTemperature } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '2.2rem'
  }
}))

const Temperature = (props) => {
  const { temperature } = props

  const classes = useStyles()

  return (
    <div className={classes.text}>{temperature}<small>°</small></div>
  )
}

const mapStateToProps = (state) => ({
  temperature: getTemperature(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)