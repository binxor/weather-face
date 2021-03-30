import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Icon, Paper } from '@material-ui/core'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

import Clock from '../Clock/Clock'
import Weather from '../Weather/Weather';
import Humidity from '../Humidity/Humidity';
import Temperature from '../Temperature/Temperature';

import '../../containers/App/App.css'

const useStyles = makeStyles(theme => ({
  readings: {
    height: '25vh',
    marginTop: '5%'

  }
}))

const Conditions = (props) => {
  const { } = props

  const [ size, setSize ] = useState(120)
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
          <Grid item sm></Grid>
          <Grid item sm className={classes.readings}>
            <Temperature />
          </Grid>
          <Grid item sm className={classes.readings}>
            <Humidity />
          </Grid>
          <Grid item sm></Grid>
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