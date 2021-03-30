import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import { Sparklines, SparklinesCurve } from 'react-sparklines'

const useStyles = makeStyles(theme => ({

}))

const Trend = (props) => {
  const { } = props

  const classes = useStyles()

  const data = [ 5, 10, 5, 20, 8, 15 ]

  const style = { 'strokeWidth': '5px', 'fill': 'none' }

  return (
    <>
      <Sparklines data={data} width={100} height={90} margin={0}>
        <SparklinesCurve color="lightblue" style={style} />
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
