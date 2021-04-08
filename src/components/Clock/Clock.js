import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

import { makeStyles } from '@material-ui/core/styles'
import { getCompletedRequest, getLocale, getSunrise, getSunset, getTimeOfDay, getTimeZone, getTimeZoneOffset } from '../../store/weather/lenses'
import { calculatePhase } from '../../store/weather/helpers'
import { changePhase } from '../../store/weather/actions'

const useStyles = makeStyles(theme => ({
  city: {
    fontSize: '1rem',
    paddingBottom: '10%'
  },
  clock: {
    font: 'consolas',
    fontSize: '3.8rem',
    marginTop: '0%',
  }
}))

const getDate = (offset) => moment().utc().add(offset, 'seconds').format('ddd, MMM DD')
const getTime = (offset) => moment().utc().add(offset, 'seconds').format('HH:mm')
const getTimestamp = (offset) => moment().utc().add(offset, 'seconds').unix() * 1000

const Clock = (props) => {
  const { changePhaseAction, completedRequest, locale, sunrise, sunset, timeOfDay, timeZone, timeZoneOffset } = props

  const classes = useStyles()

  const [ time, setTime ] = useState(moment().format('HH:mm'))
  const [ date, setDate ] = useState(moment().format('ddd, MMM DD'))
  const [ timestamp, setTimestamp ] = useState(moment().unix() * 1000)
  const [ city, setCity ] = useState('_')

  useEffect(() => {
    if (timestamp && sunrise && sunset) {
      let ts_tz =  moment(moment().tz(timeZone).unix() * 1000)
      let ts_rise = moment(sunrise).tz(timeZone)
      let ts_set = moment(sunset).tz(timeZone)
      let minutesTilSunrise = ts_rise.diff(ts_tz, 'minutes')
      let minutesTilSunset = ts_set.diff(ts_tz, 'minutes')
      let currentPhase = (calculatePhase({toSunrise: minutesTilSunrise, toSunset: minutesTilSunset}))
      if (timeOfDay != currentPhase) changePhaseAction(currentPhase)
    }
  }, [timestamp, sunrise, sunset, timeZone, timeZoneOffset])

  useEffect(() => {
    if (completedRequest === true) {
      setCity(locale)
      let secTimer = setInterval(() => {
        setTimestamp(getTimestamp(timeZoneOffset))
        setTime(getTime(timeZoneOffset))
        setDate(getDate(timeZoneOffset))
      }, 60000)
      return () => clearInterval(secTimer)
    }
  }, [ completedRequest ])

  return (
    <>
      <div>{date}</div>
      <div className={classes.clock}>{time}</div>
      <div className={classes.city}>{city}</div>
    </>
  )
}

const mapStateToProps = (state) => ({
  completedRequest: getCompletedRequest(state.weather),
  locale: getLocale(state.weather),
  sunrise: getSunrise(state.weather),
  sunset: getSunset(state.weather),
  timeOfDay: getTimeOfDay(state.weather),
  timeZone: getTimeZone(state.weather),
  timeZoneOffset: getTimeZoneOffset(state.weather),

})

const mapDispatchToProps = {
  changePhaseAction: changePhase
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock)