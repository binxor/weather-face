import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Clock from 'react-live-clock';
import { getTimeZone } from '../../store/weather/lenses'

const Time = (props) => {
  const { format, getTimeZone, timeZone, ...other } = props

  const [ localeTimezone, setLocaleTimezone ] = useState(timeZone)
  const [ timeFormat, settimeFormat ] = useState(format || 'HH:mm:ss')

  useEffect(() => {
    if (timeZone) setLocaleTimezone(timeZone)
  }, [ timeZone ])

  return (
    <Clock format={timeFormat} ticking={true} timezone={localeTimezone} {...other} />
  )
}

const mapStateToProps = (state) => ({
  timeZone: getTimeZone(state.weather)

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Time)