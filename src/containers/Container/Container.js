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
import { updateRefDay, updateRefHour, updateRefMinute, updateRefSecond } from '../../store/app/actions'
import { getReferenceDay, getReferenceHour } from '../../store/app/lenses'
import Time from '../../components/Time/Time'
import Locale from '../../components/Locale/Locale'

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY

const Container = (props) => {
  const {
    getWeatherAtLocaleAction, IS_MOBILE,
    referenceDay, referenceHour, updateRefDayAction, updateRefHourAction, updateRefMinuteAction, updateRefSecondAction
  } = props
  const useStyles = (() => makeStyles({}))



  const classes = useStyles()
  const formatClock = 'HH:mm'
  const formatDate = 'ddd, MMM DD'
  const formatHour = 'HH'
  const formatSecond = 'ss'
  const styleClock = { font: 'consolas', fontSize: '3.8rem', marginTop: '0%' }
  const styleDate = { fontSize: '1.8rem' }
  const styleHidden = { display: 'none' }
  const styleLocale = {}

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch" className={'padded'}>
      <Grid item sm={6} xs={12} className={[ JSON.stringify('highlight', 'padded') ]}>
        <Time format={formatDate} style={styleDate} interval={60 * 60 * 1000} />
        <br />
        <Time format={formatClock} style={styleClock} interval={5 * 1000} />
        <br />
        <Time format={formatHour} style={styleHidden} interval={60 * 1000} />
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
  getWeatherAtLocaleAction: getWeatherAtLocale,
  updateRefDayAction: updateRefDay,
  updateRefHourAction: updateRefHour,
  updateRefMinuteAction: updateRefMinute,
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
