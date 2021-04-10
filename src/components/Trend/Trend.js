import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

import { makeStyles } from '@material-ui/core/styles'

import { Sparklines, SparklinesCurve } from 'react-sparklines'
import { getForecast, getHourlyForecasts } from '../../store/weather/lenses'

const useStyles = makeStyles(theme => ({

}))

// TODO - integrate trends
const Trend = (props) => {
  const { color, forecast, hourlyForecasts, metric } = props

  const classes = useStyles()
  const NO_DATA_LINE_STYLE = { 'strokeWidth': '1px', 'fill': 'none' }
  const DATA_LINE_STYLE = { 'strokeWidth': '3px', 'fill': 'none' }

  useEffect(() => {
    if (hourlyForecasts && hourlyForecasts.length > 0) {
      setData(R.pluck(metric, hourlyForecasts))
      setStyle({ 'strokeWidth': '3px', 'fill': 'none' })
      setLineColor(color)
    }

  }, [color, hourlyForecasts])

  const [ data, setData ] = useState([ ])
  const [ style, setStyle ] = useState(NO_DATA_LINE_STYLE)
  const [ lineColor, setLineColor ] = useState('grey')


  return (
    <>
      <Sparklines data={data} width={90} height={40} margin={2}>
        <SparklinesCurve color={lineColor} style={style} />
      </Sparklines>
    </>
  )
}

const mapStateToProps = (state) => ({
  forecast: getForecast(state.weather),
  hourlyForecasts: getHourlyForecasts(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Trend)