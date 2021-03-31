import React from 'react'
import { connect } from 'react-redux'

import { Grid, makeStyles } from '@material-ui/core'

import '../../containers/App/App.css'
import { getIsMobile } from '../../store/app/lenses'
import { getBrightness, getLux, getName, getPressure, getUvi } from '../../store/weather/lenses'


const Intensity = (props) => {
  const { brightness, IS_MOBILE, lux, name, pressure, uvi} = props
  const useStyles = makeStyles(theme => ({
    text: {
      fontSize: '2.2rem'
    }
  }))
  const classes = useStyles()
  return (
    <>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>{uvi}</div>
          UVI
        </Grid>
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>{brightness}</div>
          INTENSITY
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>{pressure}</div>
          BAR
        </Grid>
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>{lux}</div>
          LUX
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
  brightness: getBrightness(state.weather),
  IS_MOBILE: getIsMobile(state.app),
  lux: getLux(state.weather),
  name: getName(state.weather),
  pressure: getPressure(state.weather),
  uvi: getUvi(state.weather)

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Intensity)
