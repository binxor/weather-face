import React from 'react'
import Conditions from '../../components/Conditions/Conditions'
import Humidity from '../../components/Humidity/Humidity'
import Temperature from '../../components/Temperature/Temperature'
import { Grid, makeStyles } from '@material-ui/core'
import '../App/App.css'

function Container () {
  const useStyles = (() => makeStyles({
  }))
  const classes = useStyles()
  return (
    <div className="outer">
      <Grid container direction="row" justify="space-evenly" alignItems="stretch" className={[ 'padded' ]}>
        <Grid item lg={12} sm={6} className={[ 'highlight', 'padded' ]}>
          <Conditions />
        </Grid>
        <Grid item lg={6} sm={3} className={[ 'highlight', 'padded' ]}>
          <Temperature />
        </Grid>
        <Grid item lg={6} sm={3} className={[ 'highlight', 'padded' ]}>
          <Humidity />
        </Grid>
      </Grid>
    </div>
  )
}

export default Container;
