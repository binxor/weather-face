# weather-face

Compact and modern form factor for current weather conditions


You know the drill
1. Get an API key at https://api.openweathermap.org

2. Create your `env` files
```
cp .env_example .env
cp src/server/.env_example src/server/.env
```

3. Use your new API key to replace `{YOUR_API_KEY_HERE}` in `./src/server/.env`, in this line:

```
BASE_URL_OPENWEATHERMAPS=https://api.openweathermap.org/data/2.5/onecall?lat={LAT}&lon={LON}&units=imperial&exclude=hourly,daily&appid={YOUR_API_KEY_HERE}

```


### Server
```
cd ./src/server
node -r dotenv/config server.js
```

### UI
```
npm i
npm start
```

 > http://localhost:3000