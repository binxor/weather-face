import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Grid, makeStyles } from '@material-ui/core'
import { getIsMobile } from '../../store/app/lenses'

import Conditions from '../../components/Conditions/Conditions'
import Humidity from '../../components/Humidity/Humidity'
import Temperature from '../../components/Temperature/Temperature'
import '../App/App.css'
import Intensity from '../../components/Intensity/Intensity'
import Trend from '../../components/Trend/Trend'
import { getWeatherAtLocale } from '../../store/weather/actions'
import { getReferenceDay, getReferenceHour } from '../../store/app/lenses'
import Time from '../../components/Time/Time'
import Locale from '../../components/Locale/Locale'

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY


const Container = (props) => {
  const {
    getWeatherAtLocaleAction, IS_MOBILE,
    referenceDay, referenceHour
  } = props
  const useStyles = (() => makeStyles({}))

  useEffect(() => {
    if (referenceDay) {
      console.log('referenceDay updated to ', referenceDay)
    }
  }, [ referenceDay ])

  useEffect(() => {
    if (referenceHour) {
      // TODO - update "current" forecast to next in `forecast.hourly` 
      console.log('referenceHour updated to ', referenceHour)
    }
  }, [ referenceHour ])

  // TODO - sunrise/sunset/etc transition logic here or in parent?

  const classes = useStyles()
  const formatClock = 'HH:mm'
  const formatDate = 'ddd, MMM DD'
  const styleClock = { font: 'consolas', fontSize: '3.8rem', marginTop: '0%' }
  const styleDate = { fontSize: '1.8rem' }
  const styleLocale = { }

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch" className={'padded'}>
      <Grid item sm={6} xs={12} className={[ JSON.stringify('highlight', 'padded') ]}>
        <Time format={formatDate} style={styleDate} />
        <br />
        <Time format={formatClock} style={styleClock} />
        <br/>
        <Locale style={styleLocale} />
        <Conditions />
      </Grid>
      { IS_MOBILE &&
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <Temperature />
          <Trend color={"orange"} metric={"temperature"} />
        </Grid>
      }
      { IS_MOBILE &&
        <Grid item sm={6} xs={6} className={[ JSON.stringify('highlight', 'padded') ]}>
          <Humidity />
          <Trend color={"lightblue"} metric={"humidity"} />
        </Grid>
      }
      <Grid item sm={6} xs={12}>
        <Intensity />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  IS_MOBILE: getIsMobile(state.app),
  referenceDay: getReferenceDay(state.app),
  referenceHour: getReferenceHour(state.app)
})

const mapDispatchToProps = {
  getWeatherAtLocaleAction: getWeatherAtLocale
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
