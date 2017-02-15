const server = require('connect')()
const serveStatic = require('serve-static')
const open = require('open')
const chalk = require('chalk')

const conf = require('./conf')

const basePaths = ['build', '.']

basePaths.forEach(path => server.use(serveStatic(path)))

server.listen(conf.port)

if (conf.openBrowserOnStartup) {
  open('http://localhost:' + conf.port);
}
else {
  console.log(chalk.green('serving app on http://localhost:' + conf.port))
}

