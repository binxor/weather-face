
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Container from '../Container/Container'
import { getHourlyForecasts, getHourlyIndex, getImage } from '../../store/weather/lenses'
import { calculatePhase, calculateForcastedTimeOfDay, CONDITION_MAP, KNOWN_PHASES, mapImagePhaseConditions } from '../../store/weather/helpers' // TODO - delete
import { getCompletedRequest, getLocale, getSunrise, getSunset, getTimeOfDay, getTimeZone, getTimeZoneOffset } from '../../store/weather/lenses'

import './App.css';
import dotenv from 'dotenv'
import { getReferenceDay, getReferenceHour, getReferenceMinute, getReferenceSecond } from '../../store/app/lenses'
import { changePhase, getNextHourForecast, getWeatherAtLocale } from '../../store/weather/actions'
import momentz from 'moment-timezone'

dotenv.config()

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY
const defaultImageStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

// TODO - all CHANGE PHASE sunrise/sunset/etc transition logic here or in child?
// TODO - allow city selection
// TODO - completedRequest logic here?
// TODO - dynamic locale selector
// TODO - caching

const App = (props) => {
  const {
    changePhaseAction,
    hourlyForecasts,
    getNextHourForecastAction,
    getLocale,
    getSunrise,
    getSunset,
    getTimeOfDay,
    getTimeZone,
    getWeatherAtLocaleAction,
    hourlyIndex,
    image,
    referenceDay,
    referenceHour,
    referenceMinute,
    referenceSecond,
    sunrise,
    sunset,
    timeOfDay,
    timeZone
  } = props
  const [ style, setStyle ] = useState({})
  let [ hour, setHour ] = useState(formatTime('HH'))
  let [ minute, setMinute ] = useState(formatTime('mm'))
  let [ second, setSecond ] = useState(formatTime('ss'))

  function formatTime (formatString) {
    return momentz().format(formatString);
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      const nowUnix = momentz() // TODO - LOCALE FEATURE: allow shift to locale timezone
      const [ nowHour, nowMinute, nowSecond ] = [ nowUnix.format('HH'), nowUnix.format('mm'), nowUnix.format('ss') ]
      if (nowHour != hour) {
        if (hour >= 0 && nowHour > hour) getNextHourForecastAction()
        setHour(nowHour)
      }
      if (nowMinute != minute) setMinute(nowMinute)
      if (nowSecond != second) setSecond(nowSecond)
    }, 1000)
    return () => clearInterval(ticker)
  }, [ second ])

  useEffect(() => { // backgroundImage ( imageName )
    let styleContent = { ...defaultImageStyle, backgroundImage: 'url(/images/' + image + ')' }
    if (image) setStyle(styleContent)
  }, [ image ])

  useEffect(() => { // phaseOfDay ( minute )
    if (sunrise && sunset) {
      let ts_tz = momentz(momentz().tz(timeZone).unix() * 1000)
      let ts_rise = momentz(sunrise).tz(timeZone)
      let ts_set = momentz(sunset).tz(timeZone)
      let minutesTilSunrise = ts_rise.diff(ts_tz, 'minutes')
      let minutesTilSunset = ts_set.diff(ts_tz, 'minutes')
      let currentPhase = calculatePhase({ toSunrise: minutesTilSunrise, toSunset: minutesTilSunset })
      if (timeOfDay != currentPhase) changePhaseAction(currentPhase)
    }
  }, [ minute ])


  useEffect(() => {
    getWeatherAtLocaleAction(DEFAULT_CITY)
  }, [])



  return (
    <div className="App">
      <header className="App-header" style={style}>
        <Container />
      </header>
    </div>
  );
}


const mapStateToProps = (state) => ({
  hourlyForecasts: getHourlyForecasts(state.weather),
  hourlyIndex: +getHourlyIndex(state.weather),
  image: getImage(state.weather),
  locale: getLocale(state.weather),
  referenceDay: getReferenceDay(state.app),
  referenceHour: getReferenceHour(state.app),
  referenceMinute: getReferenceMinute(state.app),
  referenceSecond: getReferenceSecond(state.app),
  sunrise: getSunrise(state.weather),
  sunset: getSunset(state.weather),
  timeOfDay: getTimeOfDay(state.weather),
  timeZone: getTimeZone(state.weather),

})

const mapDispatchToProps = {
  changePhaseAction: changePhase,
  getNextHourForecastAction: getNextHourForecast,
  getWeatherAtLocaleAction: getWeatherAtLocale
}

export default connect(mapStateToProps, mapDispatchToProps)(App)