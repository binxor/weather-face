import React from 'react'
import { connect } from 'react-redux'

import { Grid, makeStyles } from '@material-ui/core'
import { getIsMobile } from '../../store/app/lenses'

import Conditions from '../../components/Conditions/Conditions'
import Humidity from '../../components/Humidity/Humidity'
import Temperature from '../../components/Temperature/Temperature'
import '../App/App.css'
import Intensity from '../../components/Intensity/Intensity'
import Trend from '../../components/Trend/Trend'


const Container = (props) => {
  const { IS_MOBILE } = props
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

const mapStateToProps = (state) => ({
  IS_MOBILE: getIsMobile(state.app)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
