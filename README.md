# Ember Typography

Add typography.com fonts to your ember apps

## Installation

```sh
ember install ember-typography
```

## Configuration

Add to your enviroment.js file `config.enviroment.js` your typography `CSS Key`.
IE: `<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6000000/60000000/css/fonts.css" />`

`6000000/60000000` is your `CSS_KEY`

```sh
  ENV.typography =  {
    CSS_KEY: '<CSS_KEY>'  //6000000/60000000
  };
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

