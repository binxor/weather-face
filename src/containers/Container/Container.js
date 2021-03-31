import React from 'react'
import Conditions from '../../components/Conditions/Conditions'
import Humidity from '../../components/Humidity/Humidity'
import Temperature from '../../components/Temperature/Temperature'
import { Grid, makeStyles } from '@material-ui/core'
import '../App/App.css'
import Intensity from '../../components/Intensity/Intensity'
import Trend from '../../components/Trend/Trend'

const IS_MOBILE = window.innerWidth < 500

function Container () {
  const useStyles = (() => makeStyles({
  }))
  const classes = useStyles()
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch" className={[ 'padded' ]}>
      <Grid item sm={6} xs={12} className={[ 'highlight', 'padded' ]}>
        <Conditions />
      </Grid>
      { IS_MOBILE &&
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <Temperature />
          <Trend color={"orange"} />
        </Grid>
      }
      { IS_MOBILE &&
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <Humidity />
          <Trend color={"lightblue"} />
        </Grid>
      }
      <Grid item sm={6} xs={12}>
        <Intensity />
      </Grid>
    </Grid>
  )
}

export default Container;
