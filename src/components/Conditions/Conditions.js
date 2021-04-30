import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Weather from '../Weather/Weather';
import Humidity from '../Humidity/Humidity';
import Temperature from '../Temperature/Temperature';

import '../../containers/App/App.css'
import Trend from '../Trend/Trend';
import { getIsMobile } from '../../store/app/lenses'
import { getCompletedRequest, getIconUrl, getTimeOfDay } from '../../store/weather/lenses'
import { getWeatherAtLocale } from '../../store/weather/actions'

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY
const useStyles = makeStyles(theme => ({
  noTop: {
    paddingTop: '5px'
  },
  readings: {
    height: '10%',
    marginTop: '10%',
    marginBottom: '0px'
  }
}))

const Conditions = (props) => {
  const { completedRequest, getWeatherAtLocaleAction, iconUrl, IS_MOBILE, timeOfDay } = props

  const [ size, setSize ] = useState(120)
  const [ color, setColor ] = useState('lightblue')

  const classes = useStyles()

  return (
    <>
      {/* TODO - update key to force rerender @ new API responses? */}
      <Grid container direction='column' justify='space-around' spacing={0}>
        <Grid item sm>
          <Weather size={size} color={color} />
          {/* <img src={iconUrl} /> */}
        </Grid>
        <Grid item sm></Grid>
      </Grid>
      { !IS_MOBILE &&
        <Grid container direction='column' spacing={0}>
          <Grid container direction='row'>
            <Grid item sm={2}></Grid>
            <Grid item sm xs={6} className={classes.readings}>
              <Grid container direction='column' justify='space-around' spacing={0}>
                <Temperature />
              </Grid>
            </Grid>
            <Grid item sm xs={6} className={classes.readings}>
              <Grid container direction='column' justify='space-around' spacing={0}>
                <Humidity />
              </Grid>
            </Grid>
            <Grid item sm={2}></Grid>
          </Grid>
          <Grid container direction='row' justify='space-evenly' spacing={4}>
            <Grid item sm={2} xs={0}></Grid>
            <Grid item sm={4} xs={4} >
              <Grid container direction='column' justify='space-around' spacing={0} className={classes.noTop}>
                <Trend color={"orange"} metric={"temperature"} />
              </Grid>
            </Grid>
            <Grid item sm={4} xs={4} >
              <Grid container direction='column' justify='space-around' spacing={0} className={classes.noTop}>
                <Trend color={"lightblue"} metric={"humidity"} />
              </Grid>
            </Grid>
            <Grid item sm={2} xs={0}></Grid>
          </Grid>
        </Grid>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  completedRequest: getCompletedRequest(state.weather),
  iconUrl: getIconUrl(state.weather),
  IS_MOBILE: getIsMobile(state.app),
  timeOfDay: getTimeOfDay(state.weather)
})

const mapDispatchToProps = {
  getWeatherAtLocaleAction: getWeatherAtLocale
}

export default connect(mapStateToProps, mapDispatchToProps)(Conditions)