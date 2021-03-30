import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Clock from '../Clock/Clock'
import Weather from '../Weather/Weather';
import Humidity from '../Humidity/Humidity';
import Temperature from '../Temperature/Temperature';

import '../../containers/App/App.css'
import Trend from '../Trend/Trend';

const useStyles = makeStyles(theme => ({
  noTop: {
    paddingTop: '5px'
  },
  readings: {
    height: '15vh',
    marginTop: '10%'
  }
}))

const Conditions = (props) => {
  const { } = props

  const [ size, setSize ] = useState(100)
  const [ color, setColor ] = useState('lightblue')

  const classes = useStyles()

  return (
    <>
      <Grid container direction='column' justify='space-around' spacing={0}>
        <Grid item sm>
          <Clock />
        </Grid>
        <Grid item sm>
          <Weather size={size} color={color} />
        </Grid>
        <Grid item sm></Grid>
        <Grid container direction='row' justify='space-evenly' spacing={4}>
          <Grid item sm={2}></Grid>
          <Grid item sm className={classes.readings}>
            <Grid container direction='column' justify='space-around' spacing={0}>
              <Temperature />
            </Grid>
          </Grid>
          <Grid item sm className={classes.readings}>
            <Grid container direction='column' justify='space-around' spacing={0}>
              <Humidity />
            </Grid>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
        <Grid container direction='row' justify='space-evenly' spacing={4}>
          <Grid item sm={2}></Grid>
          <Grid item sm>
            <Grid container direction='column' justify='space-around' spacing={0} className={classes.noTop}>
              <Trend />
            </Grid>
          </Grid>
          <Grid item sm>
            <Grid container direction='column' justify='space-around' spacing={0} className={classes.noTop}>
              <Trend />
            </Grid>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
       </Grid>
    </>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Conditions)
export default Conditions