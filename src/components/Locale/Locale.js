import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getLocale } from '../../store/weather/lenses'

const Locale = (props) => {
  const { locale, ...other } = props
  const [ city, setCity ] = useState(locale)

  useEffect(() => {
    if (locale)
      setCity(locale)
  }, [ locale ])

  return (
    <div {...other}>{city}</div>
  )
}

const mapStateToProps = (state) => ({
  locale: getLocale(state.weather)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Locale)