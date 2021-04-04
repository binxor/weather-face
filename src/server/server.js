'use strict'

const nf = require('node-fetch')
const cors = require('cors')

// TODO - abstract out key
// TODO - implement caching solution for weather api

const API_KEY = ''

const WEATHER_DATA_BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall?lat={LAT}&lon={LON}&units=imperial&exclude=hourly,daily&appid={API_KEY}'

const express = require('express')
const app = express()
const PORT = 3003

app.get('/cors-proxy', cors(), async (req, res) => {
  const q = req.query
  const { lat, lon } = q

  if (!lat || !lon) res.send(Promise.resolve({}))

  let url = WEATHER_DATA_BASE_URL.replace('{LAT}', lat).replace('{LON}', lon).replace('{API_KEY}', API_KEY)

  let weatherApiResponse, weatherApiResponseJson
  try {
    weatherApiResponse = await nf(url)
    weatherApiResponseJson = await weatherApiResponse.json()
  } catch (e) {
    console.log(e)
    weatherApiResponseJson = Promise.resolve({e})
  }

  res.send(weatherApiResponseJson)

})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})