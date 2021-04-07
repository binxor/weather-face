const DEFAULT_LAT = process.env.REACT_APP_DEFAULT_LAT
const DEFAULT_LON = process.env.REACT_APP_DEFAULT_LON

const MOCK_RESPONSE_DEFAULT = {
  data: {
    "lat": DEFAULT_LAT,
    "lon": DEFAULT_LON,
    "timezone": "America/Los_Angeles",
    "timezone_offset": -25200,
    "current": {
      "dt": 1617808391,
      "sunrise": 1617802658,
      "sunset": 1617849910,
      "temp": 41.14,
      "feels_like": 39.11,
      "pressure": 1021,
      "humidity": 76,
      "dew_point": 34.18,
      "uvi": 0.27,
      "clouds": 90,
      "visibility": 10000,
      "wind_speed": 3.51,
      "wind_deg": 187,
      "wind_gust": 9.1,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1617807600,
        "temp": 41.14,
        "feels_like": 39.11,
        "pressure": 1021,
        "humidity": 76,
        "dew_point": 34.18,
        "uvi": 0.27,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 3.51,
        "wind_deg": 187,
        "wind_gust": 9.1,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617811200,
        "temp": 42.58,
        "feels_like": 39.63,
        "pressure": 1021,
        "humidity": 82,
        "dew_point": 37.49,
        "uvi": 0.39,
        "clouds": 82,
        "visibility": 10000,
        "wind_speed": 4.83,
        "wind_deg": 202,
        "wind_gust": 9.91,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617814800,
        "temp": 44.42,
        "feels_like": 41.23,
        "pressure": 1021,
        "humidity": 83,
        "dew_point": 39.6,
        "uvi": 0.79,
        "clouds": 81,
        "visibility": 10000,
        "wind_speed": 5.66,
        "wind_deg": 218,
        "wind_gust": 9.95,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617818400,
        "temp": 45.75,
        "feels_like": 42.55,
        "pressure": 1022,
        "humidity": 81,
        "dew_point": 40.26,
        "uvi": 1.25,
        "clouds": 83,
        "visibility": 10000,
        "wind_speed": 6.11,
        "wind_deg": 228,
        "wind_gust": 10.45,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617822000,
        "temp": 46.49,
        "feels_like": 43.63,
        "pressure": 1022,
        "humidity": 80,
        "dew_point": 40.66,
        "uvi": 1.2,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.75,
        "wind_deg": 230,
        "wind_gust": 10.33,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617825600,
        "temp": 46.9,
        "feels_like": 44.31,
        "pressure": 1021,
        "humidity": 80,
        "dew_point": 39.38,
        "uvi": 1.32,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.44,
        "wind_deg": 212,
        "wind_gust": 10.83,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617829200,
        "temp": 47.19,
        "feels_like": 44.01,
        "pressure": 1021,
        "humidity": 79,
        "dew_point": 39.49,
        "uvi": 1.26,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.6,
        "wind_deg": 204,
        "wind_gust": 13.87,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1617832800,
        "temp": 47.7,
        "feels_like": 44.11,
        "pressure": 1021,
        "humidity": 78,
        "dew_point": 39.45,
        "uvi": 0.61,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 7.65,
        "wind_deg": 203,
        "wind_gust": 15.23,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.03
      },
      {
        "dt": 1617836400,
        "temp": 47.66,
        "feels_like": 44.15,
        "pressure": 1021,
        "humidity": 78,
        "dew_point": 39.67,
        "uvi": 0.41,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 7.47,
        "wind_deg": 207,
        "wind_gust": 16.82,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.05
      },
      {
        "dt": 1617840000,
        "temp": 47.68,
        "feels_like": 44.33,
        "pressure": 1020,
        "humidity": 79,
        "dew_point": 39.9,
        "uvi": 0.23,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 7.14,
        "wind_deg": 218,
        "wind_gust": 15.73,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.1
      },
      {
        "dt": 1617843600,
        "temp": 47.19,
        "feels_like": 44.1,
        "pressure": 1020,
        "humidity": 81,
        "dew_point": 39.99,
        "uvi": 0.11,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.42,
        "wind_deg": 227,
        "wind_gust": 15.14,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.52,
        "rain": {
          "1h": 0.14
        }
      },
      {
        "dt": 1617847200,
        "temp": 46.49,
        "feels_like": 43.05,
        "pressure": 1020,
        "humidity": 81,
        "dew_point": 39.47,
        "uvi": 0.02,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.8,
        "wind_deg": 233,
        "wind_gust": 16.84,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.57,
        "rain": {
          "1h": 0.23
        }
      },
      {
        "dt": 1617850800,
        "temp": 45.63,
        "feels_like": 41.77,
        "pressure": 1020,
        "humidity": 83,
        "dew_point": 39.09,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 7.29,
        "wind_deg": 233,
        "wind_gust": 18.81,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.53,
        "rain": {
          "1h": 0.22
        }
      },
      {
        "dt": 1617854400,
        "temp": 45.18,
        "feels_like": 40.96,
        "pressure": 1021,
        "humidity": 84,
        "dew_point": 39.33,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 7.83,
        "wind_deg": 226,
        "wind_gust": 19.89,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.58,
        "rain": {
          "1h": 0.14
        }
      },
      {
        "dt": 1617858000,
        "temp": 44.87,
        "feels_like": 40.14,
        "pressure": 1021,
        "humidity": 86,
        "dew_point": 39.33,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 8.88,
        "wind_deg": 222,
        "wind_gust": 20.47,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.61
      },
      {
        "dt": 1617861600,
        "temp": 44.53,
        "feels_like": 39.38,
        "pressure": 1021,
        "humidity": 87,
        "dew_point": 39.6,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 9.69,
        "wind_deg": 226,
        "wind_gust": 21.23,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.66,
        "rain": {
          "1h": 0.15
        }
      },
      {
        "dt": 1617865200,
        "temp": 44.35,
        "feels_like": 38.91,
        "pressure": 1021,
        "humidity": 89,
        "dew_point": 39.99,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 10.31,
        "wind_deg": 225,
        "wind_gust": 22.32,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.8,
        "rain": {
          "1h": 0.22
        }
      },
      {
        "dt": 1617868800,
        "temp": 43.93,
        "feels_like": 38.37,
        "pressure": 1021,
        "humidity": 93,
        "dew_point": 40.66,
        "uvi": 0,
        "clouds": 100,
        "visibility": 9217,
        "wind_speed": 10.4,
        "wind_deg": 227,
        "wind_gust": 21.61,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.96,
        "rain": {
          "1h": 0.49
        }
      },
      {
        "dt": 1617872400,
        "temp": 43.65,
        "feels_like": 38.08,
        "pressure": 1021,
        "humidity": 96,
        "dew_point": 41.16,
        "uvi": 0,
        "clouds": 100,
        "visibility": 4534,
        "wind_speed": 10.18,
        "wind_deg": 231,
        "wind_gust": 21.21,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 0.9
        }
      },
      {
        "dt": 1617876000,
        "temp": 43.41,
        "feels_like": 37.78,
        "pressure": 1021,
        "humidity": 96,
        "dew_point": 41,
        "uvi": 0,
        "clouds": 100,
        "visibility": 6896,
        "wind_speed": 10.22,
        "wind_deg": 243,
        "wind_gust": 20.07,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 0.8
        }
      },
      {
        "dt": 1617879600,
        "temp": 42.87,
        "feels_like": 37.63,
        "pressure": 1022,
        "humidity": 94,
        "dew_point": 39.67,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 8.97,
        "wind_deg": 269,
        "wind_gust": 20.22,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 0.68
        }
      },
      {
        "dt": 1617883200,
        "temp": 41.36,
        "feels_like": 37.15,
        "pressure": 1023,
        "humidity": 94,
        "dew_point": 38.35,
        "uvi": 0,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 6.35,
        "wind_deg": 270,
        "wind_gust": 17.67,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 0.3
        }
      },
      {
        "dt": 1617886800,
        "temp": 40.03,
        "feels_like": 36.14,
        "pressure": 1023,
        "humidity": 95,
        "dew_point": 37.24,
        "uvi": 0,
        "clouds": 87,
        "visibility": 10000,
        "wind_speed": 5.5,
        "wind_deg": 260,
        "wind_gust": 15.61,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.78,
        "rain": {
          "1h": 0.19
        }
      },
      {
        "dt": 1617890400,
        "temp": 38.84,
        "feels_like": 35.49,
        "pressure": 1024,
        "humidity": 96,
        "dew_point": 36.25,
        "uvi": 0,
        "clouds": 82,
        "visibility": 10000,
        "wind_speed": 4.54,
        "wind_deg": 254,
        "wind_gust": 15.17,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.76,
        "rain": {
          "1h": 0.28
        }
      },
      {
        "dt": 1617894000,
        "temp": 41.07,
        "feels_like": 37.09,
        "pressure": 1024,
        "humidity": 92,
        "dew_point": 37.4,
        "uvi": 0.36,
        "clouds": 84,
        "visibility": 10000,
        "wind_speed": 5.91,
        "wind_deg": 268,
        "wind_gust": 17.07,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.72,
        "rain": {
          "1h": 0.21
        }
      },
      {
        "dt": 1617897600,
        "temp": 43.47,
        "feels_like": 38.98,
        "pressure": 1025,
        "humidity": 84,
        "dew_point": 37.6,
        "uvi": 1.02,
        "clouds": 72,
        "visibility": 10000,
        "wind_speed": 7.65,
        "wind_deg": 282,
        "wind_gust": 15.86,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.76,
        "rain": {
          "1h": 0.19
        }
      },
      {
        "dt": 1617901200,
        "temp": 45.03,
        "feels_like": 40.57,
        "pressure": 1025,
        "humidity": 73,
        "dew_point": 35.28,
        "uvi": 2.06,
        "clouds": 66,
        "visibility": 10000,
        "wind_speed": 8.34,
        "wind_deg": 285,
        "wind_gust": 14.2,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.74,
        "rain": {
          "1h": 0.15
        }
      },
      {
        "dt": 1617904800,
        "temp": 47.1,
        "feels_like": 43.34,
        "pressure": 1026,
        "humidity": 63,
        "dew_point": 33.51,
        "uvi": 3.24,
        "clouds": 68,
        "visibility": 10000,
        "wind_speed": 7.76,
        "wind_deg": 290,
        "wind_gust": 12.77,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.74,
        "rain": {
          "1h": 0.16
        }
      },
      {
        "dt": 1617908400,
        "temp": 48.13,
        "feels_like": 44.92,
        "pressure": 1026,
        "humidity": 58,
        "dew_point": 32.29,
        "uvi": 3.01,
        "clouds": 92,
        "visibility": 10000,
        "wind_speed": 7,
        "wind_deg": 297,
        "wind_gust": 11.88,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.62,
        "rain": {
          "1h": 0.11
        }
      },
      {
        "dt": 1617912000,
        "temp": 49.05,
        "feels_like": 46.58,
        "pressure": 1026,
        "humidity": 53,
        "dew_point": 31.26,
        "uvi": 3.33,
        "clouds": 94,
        "visibility": 10000,
        "wind_speed": 5.91,
        "wind_deg": 295,
        "wind_gust": 10.83,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.6,
        "rain": {
          "1h": 0.11
        }
      },
      {
        "dt": 1617915600,
        "temp": 51.98,
        "feels_like": 48.9,
        "pressure": 1026,
        "humidity": 43,
        "dew_point": 28.92,
        "uvi": 3.17,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 5.5,
        "wind_deg": 276,
        "wind_gust": 11.07,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.61
      },
      {
        "dt": 1617919200,
        "temp": 52.43,
        "feels_like": 49.26,
        "pressure": 1026,
        "humidity": 40,
        "dew_point": 28.02,
        "uvi": 3.54,
        "clouds": 97,
        "visibility": 10000,
        "wind_speed": 5.3,
        "wind_deg": 263,
        "wind_gust": 11.14,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.53
      },
      {
        "dt": 1617922800,
        "temp": 53.28,
        "feels_like": 50.18,
        "pressure": 1025,
        "humidity": 40,
        "dew_point": 28.4,
        "uvi": 2.41,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 4.83,
        "wind_deg": 268,
        "wind_gust": 10.63,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.49
      },
      {
        "dt": 1617926400,
        "temp": 52.95,
        "feels_like": 49.93,
        "pressure": 1025,
        "humidity": 42,
        "dew_point": 28.9,
        "uvi": 1.33,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 4.14,
        "wind_deg": 289,
        "wind_gust": 9.35,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.44
      },
      {
        "dt": 1617930000,
        "temp": 52.07,
        "feels_like": 49.14,
        "pressure": 1025,
        "humidity": 46,
        "dew_point": 30.85,
        "uvi": 0.59,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 3.4,
        "wind_deg": 301,
        "wind_gust": 7.67,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617933600,
        "temp": 49.35,
        "feels_like": 49.35,
        "pressure": 1025,
        "humidity": 56,
        "dew_point": 32.95,
        "uvi": 0.14,
        "clouds": 93,
        "visibility": 10000,
        "wind_speed": 2.71,
        "wind_deg": 293,
        "wind_gust": 8.93,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.02
      },
      {
        "dt": 1617937200,
        "temp": 45.36,
        "feels_like": 44.11,
        "pressure": 1026,
        "humidity": 64,
        "dew_point": 32.18,
        "uvi": 0,
        "clouds": 91,
        "visibility": 10000,
        "wind_speed": 3.31,
        "wind_deg": 312,
        "wind_gust": 10.31,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.02
      },
      {
        "dt": 1617940800,
        "temp": 43.16,
        "feels_like": 40.05,
        "pressure": 1027,
        "humidity": 68,
        "dew_point": 31.69,
        "uvi": 0,
        "clouds": 91,
        "visibility": 10000,
        "wind_speed": 5.19,
        "wind_deg": 329,
        "wind_gust": 12.55,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1617944400,
        "temp": 40.3,
        "feels_like": 37.71,
        "pressure": 1027,
        "humidity": 74,
        "dew_point": 31.08,
        "uvi": 0,
        "clouds": 82,
        "visibility": 10000,
        "wind_speed": 3.96,
        "wind_deg": 340,
        "wind_gust": 8.88,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1617948000,
        "temp": 38.05,
        "feels_like": 38.05,
        "pressure": 1027,
        "humidity": 79,
        "dew_point": 30.56,
        "uvi": 0,
        "clouds": 73,
        "visibility": 10000,
        "wind_speed": 2.24,
        "wind_deg": 360,
        "wind_gust": 4.94,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1617951600,
        "temp": 36.95,
        "feels_like": 36.95,
        "pressure": 1027,
        "humidity": 81,
        "dew_point": 30.31,
        "uvi": 0,
        "clouds": 21,
        "visibility": 10000,
        "wind_speed": 1.1,
        "wind_deg": 56,
        "wind_gust": 2.75,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617955200,
        "temp": 36.07,
        "feels_like": 36.07,
        "pressure": 1026,
        "humidity": 84,
        "dew_point": 30.2,
        "uvi": 0,
        "clouds": 18,
        "visibility": 10000,
        "wind_speed": 1.19,
        "wind_deg": 118,
        "wind_gust": 2.01,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617958800,
        "temp": 35.28,
        "feels_like": 35.28,
        "pressure": 1026,
        "humidity": 86,
        "dew_point": 30,
        "uvi": 0,
        "clouds": 14,
        "visibility": 10000,
        "wind_speed": 1.3,
        "wind_deg": 88,
        "wind_gust": 1.77,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617962400,
        "temp": 34.63,
        "feels_like": 34.63,
        "pressure": 1026,
        "humidity": 87,
        "dew_point": 29.8,
        "uvi": 0,
        "clouds": 12,
        "visibility": 10000,
        "wind_speed": 1.77,
        "wind_deg": 81,
        "wind_gust": 2.04,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617966000,
        "temp": 34.07,
        "feels_like": 34.07,
        "pressure": 1026,
        "humidity": 89,
        "dew_point": 29.57,
        "uvi": 0,
        "clouds": 11,
        "visibility": 10000,
        "wind_speed": 1.57,
        "wind_deg": 75,
        "wind_gust": 1.88,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617969600,
        "temp": 33.58,
        "feels_like": 33.58,
        "pressure": 1025,
        "humidity": 89,
        "dew_point": 29.26,
        "uvi": 0,
        "clouds": 10,
        "visibility": 10000,
        "wind_speed": 1.61,
        "wind_deg": 61,
        "wind_gust": 2.06,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617973200,
        "temp": 33.13,
        "feels_like": 33.13,
        "pressure": 1025,
        "humidity": 90,
        "dew_point": 29.03,
        "uvi": 0,
        "clouds": 7,
        "visibility": 10000,
        "wind_speed": 1.41,
        "wind_deg": 79,
        "wind_gust": 1.79,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1617976800,
        "temp": 33.57,
        "feels_like": 33.57,
        "pressure": 1025,
        "humidity": 88,
        "dew_point": 28.98,
        "uvi": 0,
        "clouds": 8,
        "visibility": 10000,
        "wind_speed": 1.41,
        "wind_deg": 95,
        "wind_gust": 1.61,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      }
    ],
    "daily": [
      {
        "dt": 1617825600,
        "sunrise": 1617802658,
        "sunset": 1617849910,
        "temp": {
          "day": 46.9,
          "min": 40.21,
          "max": 47.7,
          "night": 44.53,
          "eve": 46.49,
          "morn": 41.29
        },
        "feels_like": {
          "day": 44.31,
          "night": 41.29,
          "eve": 43.05,
          "morn": 41.29
        },
        "pressure": 1021,
        "humidity": 80,
        "dew_point": 39.38,
        "wind_speed": 5.44,
        "wind_deg": 212,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 100,
        "pop": 0.66,
        "rain": 0.88,
        "uvi": 1.32
      },
      {
        "dt": 1617912000,
        "sunrise": 1617888947,
        "sunset": 1617936388,
        "temp": {
          "day": 49.05,
          "min": 38.05,
          "max": 53.28,
          "night": 38.05,
          "eve": 49.35,
          "morn": 38.84
        },
        "feels_like": {
          "day": 46.58,
          "night": 35.49,
          "eve": 49.35,
          "morn": 35.49
        },
        "pressure": 1026,
        "humidity": 53,
        "dew_point": 31.26,
        "wind_speed": 5.91,
        "wind_deg": 295,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 94,
        "pop": 1,
        "rain": 4.79,
        "uvi": 3.54
      },
      {
        "dt": 1617998400,
        "sunrise": 1617975236,
        "sunset": 1618022865,
        "temp": {
          "day": 52.7,
          "min": 33.13,
          "max": 55.83,
          "night": 41.7,
          "eve": 50.36,
          "morn": 33.57
        },
        "feels_like": {
          "day": 49.73,
          "night": 33.57,
          "eve": 47.68,
          "morn": 33.57
        },
        "pressure": 1023,
        "humidity": 44,
        "dew_point": 30.25,
        "wind_speed": 5.1,
        "wind_deg": 251,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 55,
        "pop": 0.38,
        "rain": 0.15,
        "uvi": 5.54
      },
      {
        "dt": 1618084800,
        "sunrise": 1618061526,
        "sunset": 1618109343,
        "temp": {
          "day": 47.23,
          "min": 35.98,
          "max": 47.23,
          "night": 35.98,
          "eve": 39.97,
          "morn": 39.87
        },
        "feels_like": {
          "day": 42.48,
          "night": 34.92,
          "eve": 36.82,
          "morn": 34.92
        },
        "pressure": 1023,
        "humidity": 59,
        "dew_point": 31.93,
        "wind_speed": 10.36,
        "wind_deg": 285,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 100,
        "pop": 1,
        "rain": 4.12,
        "uvi": 3.68
      },
      {
        "dt": 1618171200,
        "sunrise": 1618147817,
        "sunset": 1618195820,
        "temp": {
          "day": 56.48,
          "min": 32.63,
          "max": 58.35,
          "night": 40.73,
          "eve": 46.72,
          "morn": 37.38
        },
        "feels_like": {
          "day": 53.65,
          "night": 37.38,
          "eve": 44.74,
          "morn": 37.38
        },
        "pressure": 1022,
        "humidity": 39,
        "dew_point": 30.83,
        "wind_speed": 3.2,
        "wind_deg": 6,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": 19,
        "pop": 0,
        "uvi": 4
      },
      {
        "dt": 1618257600,
        "sunrise": 1618234108,
        "sunset": 1618282298,
        "temp": {
          "day": 63.01,
          "min": 35.2,
          "max": 63.97,
          "night": 45.07,
          "eve": 51.19,
          "morn": 40.24
        },
        "feels_like": {
          "day": 60.24,
          "night": 40.24,
          "eve": 48.97,
          "morn": 40.24
        },
        "pressure": 1019,
        "humidity": 26,
        "dew_point": 27.23,
        "wind_speed": 4.72,
        "wind_deg": 67,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 0,
        "pop": 0,
        "uvi": 4
      },
      {
        "dt": 1618344000,
        "sunrise": 1618320400,
        "sunset": 1618368776,
        "temp": {
          "day": 66.87,
          "min": 41,
          "max": 66.88,
          "night": 47.03,
          "eve": 53.76,
          "morn": 46.2
        },
        "feels_like": {
          "day": 64.47,
          "night": 46.2,
          "eve": 51.57,
          "morn": 46.2
        },
        "pressure": 1022,
        "humidity": 26,
        "dew_point": 30.11,
        "wind_speed": 3.2,
        "wind_deg": 31,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": 34,
        "pop": 0,
        "uvi": 4
      },
      {
        "dt": 1618430400,
        "sunrise": 1618406693,
        "sunset": 1618455254,
        "temp": {
          "day": 64.58,
          "min": 45.23,
          "max": 64.58,
          "night": 49.14,
          "eve": 55.99,
          "morn": 49.1
        },
        "feels_like": {
          "day": 61.83,
          "night": 46.15,
          "eve": 52.84,
          "morn": 46.15
        },
        "pressure": 1019,
        "humidity": 23,
        "dew_point": 25.7,
        "wind_speed": 13.13,
        "wind_deg": 71,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 0,
        "pop": 0,
        "uvi": 4
      }
    ]
  }
}

const MOCK_RESPONSE_AMBILOBE = { data: { "lat": -13.2026, "lon": 49.0514, "timezone": "Indian/Antananarivo", "timezone_offset": 10800, "current": { "dt": 1617500147, "sunrise": 1617504513, "sunset": 1617547479, "temp": 71.56, "feels_like": 72.79, "pressure": 1012, "humidity": 93, "dew_point": 69.44, "uvi": 0, "clouds": 13, "visibility": 10000, "wind_speed": 3.27, "wind_deg": 109, "wind_gust": 3.36, "weather": [ { "id": 801, "main": "MOCK Clouds", "description": "few clouds", "icon": "02n" } ] } } }


module.exports = {
  MOCK_RESPONSE_AMBILOBE,
  MOCK_RESPONSE_DEFAULT,
}