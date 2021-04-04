'use strict'

const nf = require('node-fetch')
const cors = require('cors')

// TODO - implement caching solution for weather api
// TODO - add pre-health check endpoint for UI

const WEATHER_DATA_BASE_URL = process.env.BASE_URL_OPENWEATHERMAPS

const express = require('express')
const app = express()
const PORT = process.env.API_PORT

app.get('/cors-proxy', cors(), async (req, res) => {
  const q = req.query
  const { lat, lon } = q

  if (!lat || !lon) res.send(Promise.resolve({}))

  let url = WEATHER_DATA_BASE_URL.replace('{LAT}', lat).replace('{LON}', lon)

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
  console.log(`Service listening at http://localhost:${PORT}`)
})