import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  clock: {
    font: 'consolas',
    fontSize: '3.8rem',
    marginTop: '0%',
    paddingBottom: '15%',

  }
}))

const Clock = (props) => {
  const { } = props

  const classes = useStyles()

  return (
    <>
      <div className={classes.clock}>20:00</div>
    </>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Clock)
export default Clock