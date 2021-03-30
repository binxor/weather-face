import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '2.2rem'
  }
}))

const Temperature = (props) => {
  const { } = props

  const classes = useStyles()

  return (
    <div className={classes.text}>75<small>°</small></div>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Temperature)
export default Temperature