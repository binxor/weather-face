import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

import { makeStyles } from '@material-ui/core/styles'
import { getLocale, getTimeZone, getTimeZoneOffset } from '../../store/weather/lenses'

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
  const { locale, timeZone, timeZoneOffset } = props

  const classes = useStyles()


  const [ time, setTime ] = useState('00:00:00')
  const [ date, setDate ] = useState(getDate('America/Los_Angeles'))

  useEffect(() => {
    if (timeZoneOffset) {
      let secTimer = setInterval(() => {
        setTime(getTime(timeZoneOffset))
        setDate(getDate(timeZoneOffset))
      }, 1000)
      return () => clearInterval(secTimer)
    }
  }, [timeZoneOffset])

  return (
    <>
      <div>{date}</div>
      <div className={classes.clock}>{time}</div>
      <div className={classes.city}>{locale}</div>
    </>
  )
}

const mapStateToProps = (state) => ({
  locale: getLocale(state.weather),
  timeZone: getTimeZone(state.weather),
  timeZoneOffset: getTimeZoneOffset(state.weather)

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Clock)