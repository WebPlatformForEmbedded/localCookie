# localCookies

A tiny localStorage with fallback to Cookies shim. Will allow apps to use localStorage but fallsback to cookies when that is not available in the browser.

## About localCookies

The localCookies library has the exact same API as localStorage, for more information see [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

localCookies comes in two flavors a iife function that can be directly used in the <script> tag under `./dist` and a ES6 module under `./modul`

## Getting started

localCookies can be directly imported from the `dist` or `module` folder. For development:

```Shell
npm install github:WebPlatformForEmbedded/localCookies
// or
yarn add github:WebPlatformForEmbedded/localCookies
```

Next you can `import` the localCookies dependency into your own script and start implementing it from there.

```js
import Storage from './module/Storage.js',
// or
const Storage = require('./module/Storage.js')
```

## Build

To build a new dist or module from source execute: `npm run build`

## Running tests

This library has unit / integration tests, located in the `tests` folder.

To run all the tests execute: `npm test`

This will run rollup, start a http-server with mocha/chai and run the tests in a browser.
