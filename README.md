# Weather Monster

Search and select cities to see their min and max temperatures.

## Installation

In order to run the app you need install dependencies.

### npm

Installing dependencies via `npm`:

`cd /project/root/directory`

`npm i`

### yarn

Installing dependencies via `npm`:

`cd /project/root/directory`

`yarn install`

## Running the app

Once all the dependencies are installed, you can run the app from the project root directory with:

### npm

`npm start`

### yarn

`yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests

This app is shipped with unit and integration tests. Unit tests are written using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) and integration tests are written in [Cypress](https://www.cypress.io/).

### Unit tests

`npm test` <br/>or<br/>
`yarn test`

Runs all the unit tests and launches the test runner in the interactive watch mode.

### Integration tests

`Cypress` is configured in such a way that it could run integration tests on command line. When it finishes it generates `.mp4` video about how the app behaved during tests.

Run `Cypress` in command line with:

`npm test:e2e:run`<br/>or<br/>
`yarn test:e2e:run`

In order to view all the tests available and watch them running in browser, open `Cypress` GUI with:

`npm test:e2e:open`<br/>or<br/>
`yarn test:e2e:open`

## Configuration (`src/config.js`)

However, this is not a mature app yet, you can configure following options in `src/config.js` the way you want.

- App name
- Search field placeholder text
- Notification messages (Error, loading data and empty state)
- Temperature units

For example, the default units of temperature are set to `metric` i.e. `Celsius`. In order to change it to `imperial` i.e. `fahrenheit`, refer `src/constants.js` to find the name of constant variable and use in `src/config.js`. Therefore, in `src/config.js`, change:

`export const units = constants.units.METRIC` <br/>with<br/>
`export const units = constants.units.IMPERIAL`
