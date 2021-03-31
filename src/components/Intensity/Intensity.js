import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import '../../containers/App/App.css'

const IS_MOBILE = window.innerWidth < 500

function Intensity () {
  const useStyles = makeStyles(theme => ({
    text: {
      fontSize: '2.2rem'
    }
  }))
  const classes = useStyles()
  return (
    <>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>3</div>
          UVI
        </Grid>
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>DAY</div>
          INTENSITY
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>0.99</div>
          BAR
        </Grid>
        <Grid item sm={6} xs={6} className={[ 'highlight', 'padded' ]}>
          <div className={classes.text}>1000</div>
          LUX
        </Grid>
      </Grid>
    </>
  )
}

export default Intensity;
