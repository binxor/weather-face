import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Clock from 'react-live-clock';
import { getTimeZone } from '../../store/weather/lenses'

const Time = (props) => {
  const { format, getTimeZone, timeZone, ...other } = props

  const [ localeTimezone, setLocaleTimezone ] = useState(timeZone)
  const [ timeFormat, setTimeFormat ] = useState(format || 'HH:mm:ss')


  return (
    <Clock format={timeFormat} ticking={true} timezone={timeZone} {...other} />
  )
}

const mapStateToProps = (state) => ({
  timeZone: getTimeZone(state.weather)

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Time)