import React from 'react'
import { connect } from 'react-redux'

import { Grid, makeStyles } from '@material-ui/core'

import '../../containers/App/App.css'
import { getIsMobile } from '../../store/app/lenses'
import { 
  getBrightness, getLux, getName, 
  getPressure, getUvi, getVisibility,
  getSunrise, getSunset, getWindSpeed, getTimeZone 
} from '../../store/weather/lenses'
import { formatTimeFromUnixMs } from '../../store/weather/helpers'


const Intensity = (props) => {
  const { 
    brightness, IS_MOBILE, lux, name, 
    pressure, sunrise, sunset, uvi,
    visibility, windSpeed 
  } = props
  const useStyles = makeStyles(theme => ({
    text: {
      fontSize: '2.2rem'
    }
  }))
  const classes = useStyles()
  return (
    <>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{formatTimeFromUnixMs(sunrise)}</div>
          SUNRISE
        </Grid>
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{formatTimeFromUnixMs(sunset)}</div>
          SUNSET
        </Grid>
      </Grid>
      <br/>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{uvi}</div>
          UVI
        </Grid>
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{pressure}</div>
          ATM
        </Grid>
      </Grid>
      <br/>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{windSpeed?windSpeed:0} </div>
          WINDSPEED <small>(MPH)</small>
        </Grid>
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{visibility?visibility*0.000621371:0}</div>
          VISIBILITY <small>(MILES)</small>
        </Grid>
      </Grid>
      {/* <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{brightness}</div>
          INTENSITY
        </Grid>
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <div className={classes.text}>{lux}</div>
          LUX
        </Grid>
      </Grid> */}
    </>
  )
}

const mapStateToProps = (state) => ({
  brightness: getBrightness(state.weather),
  IS_MOBILE: getIsMobile(state.app),
  lux: getLux(state.weather),
  name: getName(state.weather),
  pressure: getPressure(state.weather),
  sunrise: getSunrise(state.weather),
  sunset: getSunset(state.weather),
  uvi: getUvi(state.weather),
  visibility: getVisibility(state.weather),
  windSpeed: getWindSpeed(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Intensity)
