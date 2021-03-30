import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

const Trend = (props) => {
  const { } = props

  const classes = useStyles()

  return (
    <Paper>
      <>Trend</>
    </Paper>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Trend)
