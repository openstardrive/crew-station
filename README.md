# crew-station
An OpenStardrive crew station.


## Develop

- Install system dependencies
    - [NodeJS](https://nodejs.org/en/)
- Install the other stuffs
    - `npm install`
    - `npm run update-typings`  (also, consider installing the [typings](https://github.com/typings/typings) CLI `npm install typings --global`)
- Start the dev server
    - `npm start`
    - Be sure to start the [api server](https://github.com/openstardrive/server) as well!
- Go to `http://localhost:3001` in your web browser [of choice](https://www.google.com/chrome/browser/desktop/)

## Production build

- Create a JSON build config file

    {
        "apiEndpoint": "http://localhost:3000/api",
        "publicEndpoint": "http://localhost:3001",
        "assetsEndpoint": "http://localhost:3000/assets",
        "includeLogs": true
    }

- Build
    - `OSD_CREW_BUILD_CONFIG="/path/to/config.json" npm run build-production`