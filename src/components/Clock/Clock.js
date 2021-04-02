import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  clock: {
    font: 'consolas',
    fontSize: '3.8rem',
    marginTop: '0%',
    paddingBottom: '15%',

  }
}))

const getTime = () => moment().format('HH:mm:ss')

const Clock = (props) => {
  const { } = props

  const classes = useStyles()

  const [ time, setTime ] = useState(getTime())
  const [ date, setDate ] = useState(moment().format('ddd, MMM DD'))
  
  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(getTime())
    }, 1000)
    return () => clearInterval(secTimer)
  }, [])

  return (
    <>
      <div>{date}</div>
      <div className={classes.clock}>{time}</div>
    </>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Clock)
export default Clock