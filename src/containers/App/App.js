
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Container from '../Container/Container'

import { getImage } from '../../store/weather/lenses'
import './App.css';

import dotenv from 'dotenv'
dotenv.config()

const defaultImageStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const App = (props) => {
  const { image } = props

  const [ style, setStyle ] = useState({})

  useEffect(() => {
    let styleContent = { ...defaultImageStyle, 'background-image': 'url(/images/' + image + ')' }
    if (image) setStyle(styleContent)
  }, [ image ])

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <Container />
      </header>
    </div>
  );
}


const mapStateToProps = (state) => ({
  image: getImage(state.weather)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)