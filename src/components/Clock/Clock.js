import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  clock: {
    font: 'consolas',
    fontSize: '4.2rem',
    height: '22vh',
    marginTop: '17%'
  }
}))

const Clock = (props) => {
  const { } = props

  const classes = useStyles()

  return (
    <>
      <div className={classes.clock}>0:00</div>
    </>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Clock)
export default Clock