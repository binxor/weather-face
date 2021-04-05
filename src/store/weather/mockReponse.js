const DEFAULT_LAT = process.env.REACT_APP_DEFAULT_LAT
const DEFAULT_LON = process.env.REACT_APP_DEFAULT_LON

const MOCK_RESPONSE_DEFAULT = {
  data: {
    "lat": DEFAULT_LAT,
    "lon": DEFAULT_LON,
    "timezone": "America/Los_Angeles",
    "timezone_offset": -25200,
    "current": {
      "dt": 1617647711,
      "sunrise": 1617630082,
      "sunset": 1617676955,
      "temp": 48.58,
      "feels_like": 42.08,
      "pressure": 1025,
      "humidity": 57,
      "dew_point": 34.05,
      "uvi": 4.16,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 5.75,
      "wind_deg": 0,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    },
    "minutely": [
      {
        "dt": 1617647760,
        "precipitation": 0
      },
      {
        "dt": 1617647820,
        "precipitation": 0
      },
      {
        "dt": 1617647880,
        "precipitation": 0
      },
      {
        "dt": 1617647940,
        "precipitation": 0
      },
      {
        "dt": 1617648000,
        "precipitation": 0
      },
      {
        "dt": 1617648060,
        "precipitation": 0
      },
      {
        "dt": 1617648120,
        "precipitation": 0
      },
      {
        "dt": 1617648180,
        "precipitation": 0
      },
      {
        "dt": 1617648240,
        "precipitation": 0
      },
      {
        "dt": 1617648300,
        "precipitation": 0
      },
      {
        "dt": 1617648360,
        "precipitation": 0
      },
      {
        "dt": 1617648420,
        "precipitation": 0
      },
      {
        "dt": 1617648480,
        "precipitation": 0
      },
      {
        "dt": 1617648540,
        "precipitation": 0
      },
      {
        "dt": 1617648600,
        "precipitation": 0
      },
      {
        "dt": 1617648660,
        "precipitation": 0
      },
      {
        "dt": 1617648720,
        "precipitation": 0
      },
      {
        "dt": 1617648780,
        "precipitation": 0
      },
      {
        "dt": 1617648840,
        "precipitation": 0
      },
      {
        "dt": 1617648900,
        "precipitation": 0
      },
      {
        "dt": 1617648960,
        "precipitation": 0
      },
      {
        "dt": 1617649020,
        "precipitation": 0
      },
      {
        "dt": 1617649080,
        "precipitation": 0
      },
      {
        "dt": 1617649140,
        "precipitation": 0
      },
      {
        "dt": 1617649200,
        "precipitation": 0
      },
      {
        "dt": 1617649260,
        "precipitation": 0
      },
      {
        "dt": 1617649320,
        "precipitation": 0
      },
      {
        "dt": 1617649380,
        "precipitation": 0
      },
      {
        "dt": 1617649440,
        "precipitation": 0
      },
      {
        "dt": 1617649500,
        "precipitation": 0
      },
      {
        "dt": 1617649560,
        "precipitation": 0
      },
      {
        "dt": 1617649620,
        "precipitation": 0
      },
      {
        "dt": 1617649680,
        "precipitation": 0
      },
      {
        "dt": 1617649740,
        "precipitation": 0
      },
      {
        "dt": 1617649800,
        "precipitation": 0
      },
      {
        "dt": 1617649860,
        "precipitation": 0
      },
      {
        "dt": 1617649920,
        "precipitation": 0
      },
      {
        "dt": 1617649980,
        "precipitation": 0
      },
      {
        "dt": 1617650040,
        "precipitation": 0
      },
      {
        "dt": 1617650100,
        "precipitation": 0
      },
      {
        "dt": 1617650160,
        "precipitation": 0
      },
      {
        "dt": 1617650220,
        "precipitation": 0
      },
      {
        "dt": 1617650280,
        "precipitation": 0
      },
      {
        "dt": 1617650340,
        "precipitation": 0
      },
      {
        "dt": 1617650400,
        "precipitation": 0
      },
      {
        "dt": 1617650460,
        "precipitation": 0
      },
      {
        "dt": 1617650520,
        "precipitation": 0
      },
      {
        "dt": 1617650580,
        "precipitation": 0
      },
      {
        "dt": 1617650640,
        "precipitation": 0
      },
      {
        "dt": 1617650700,
        "precipitation": 0
      },
      {
        "dt": 1617650760,
        "precipitation": 0
      },
      {
        "dt": 1617650820,
        "precipitation": 0
      },
      {
        "dt": 1617650880,
        "precipitation": 0
      },
      {
        "dt": 1617650940,
        "precipitation": 0
      },
      {
        "dt": 1617651000,
        "precipitation": 0
      },
      {
        "dt": 1617651060,
        "precipitation": 0
      },
      {
        "dt": 1617651120,
        "precipitation": 0
      },
      {
        "dt": 1617651180,
        "precipitation": 0
      },
      {
        "dt": 1617651240,
        "precipitation": 0
      },
      {
        "dt": 1617651300,
        "precipitation": 0
      },
      {
        "dt": 1617651360,
        "precipitation": 0
      }
    ]
  }
}

const MOCK_RESPONSE_AMBILOBE = { data: { "lat": -13.2026, "lon": 49.0514, "timezone": "Indian/Antananarivo", "timezone_offset": 10800, "current": { "dt": 1617500147, "sunrise": 1617504513, "sunset": 1617547479, "temp": 71.56, "feels_like": 72.79, "pressure": 1012, "humidity": 93, "dew_point": 69.44, "uvi": 0, "clouds": 13, "visibility": 10000, "wind_speed": 3.27, "wind_deg": 109, "wind_gust": 3.36, "weather": [ { "id": 801, "main": "MOCK Clouds", "description": "few clouds", "icon": "02n" } ] } } }


module.exports = {
  MOCK_RESPONSE_AMBILOBE,
  MOCK_RESPONSE_DEFAULT,
}