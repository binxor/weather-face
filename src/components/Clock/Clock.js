import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

import { makeStyles } from '@material-ui/core/styles'
import { getCompletedRequest, getLocale, getTimeZone, getTimeZoneOffset } from '../../store/weather/lenses'

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

const getTime = (offset) => moment().utc().add(offset, 'seconds').format('HH:mm:ss')
const getDate = (offset) => moment().utc().add(offset, 'seconds').format('ddd, MMM DD')

const Clock = (props) => {
  const { completedRequest, locale, timeZone, timeZoneOffset } = props

  const classes = useStyles()


  const [ time, setTime ] = useState(moment().format('HH:mm:ss'))
  const [ date, setDate ] = useState(moment().format('ddd, MMM DD'))
  const [ city, setCity ] = useState('_')

  useEffect(() => {
    if (completedRequest === true) {
      setCity(locale)
      let secTimer = setInterval(() => {
        setTime(getTime(timeZoneOffset))
        setDate(getDate(timeZoneOffset))
      }, 1000)
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
  timeZone: getTimeZone(state.weather),
  timeZoneOffset: getTimeZoneOffset(state.weather)

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Clock)