import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import { Sparklines, SparklinesCurve } from 'react-sparklines'

const useStyles = makeStyles(theme => ({

}))

// TODO - integrate trends
const Trend = (props) => {
  const { color } = props

  const classes = useStyles()

  const data = [ 5, 10, 5, 20, 8, 15 ]

  const style = { 'strokeWidth': '3px', 'fill': 'none' }

  return (
    <>
      <Sparklines data={data} width={90} height={40} margin={2}>
        <SparklinesCurve color={color} style={style} />
      </Sparklines>
    </>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Trend)

export default Trend
