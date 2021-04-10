
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Container from '../Container/Container'
import { getImage } from '../../store/weather/lenses'
import { calculatePhase, calculateForcastedTimeOfDay, CONDITION_MAP, KNOWN_PHASES, mapImagePhaseConditions } from '../../store/weather/helpers' // TODO - delete
import './App.css';
import dotenv from 'dotenv'
import { getReferenceDay, getReferenceHour } from '../../store/app/lenses'
import { getWeatherAtLocale } from '../../store/weather/actions'
dotenv.config()

const DEFAULT_CITY = process.env.REACT_APP_DEFAULT_CITY
const defaultImageStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

// TODO - all CHANGE PHASE sunrise/sunset/etc transition logic here or in child?
// TODO - allow city selection
// TODO - completedRequest logic here?

const App = (props) => {
  const { getWeatherAtLocaleAction, image, referenceDay, referenceHour } = props
  const [ style, setStyle ] = useState({})

  useEffect(() => {
    let styleContent = { ...defaultImageStyle, backgroundImage: 'url(/images/' + image + ')' }
    if (image) setStyle(styleContent)
  }, [ image ])

  useEffect(() => {
      getWeatherAtLocaleAction(DEFAULT_CITY)
  }, [])

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <Container />
      </header>
    </div>
  );
}


const mapStateToProps = (state) => ({
  image: getImage(state.weather),
  referenceDay: getReferenceDay(state.app),
  referenceHour: getReferenceHour(state.app)
})

const mapDispatchToProps = {
  getWeatherAtLocaleAction: getWeatherAtLocale 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)