var glob = require('glob')

module.exports = {
  index: 'app/index.html',
  prodDependencies: [
    './node_modules/angular/angular.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
  ],
  testDependencies: [
    './node_modules/angular-mocks/angular-mocks.js'
  ],
  srcJs: glob.sync('./app/**/*.js'),
  tests: glob.sync('./app/*.spec.js'),
  port: 3001,
  openBrowserOnStartup: true
};
