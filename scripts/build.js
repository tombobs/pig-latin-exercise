var fs = require('fs');
var paths = require('./conf');

fs.mkdirSync('build');
fs.mkdirSync('build/js');
fs.mkdirSync('build/css');

require('child_process').exec('npm run ngTemplates')

// copy js to /build
var sources = [].concat(
  paths.srcJs
  )
  .filter(filePath => !/\.spec.js$/.test(filePath))
  .map(filePath => {
    var parts = filePath.split('/');
    const dest = './build/js/' + parts[parts.length - 1];
    fs.createReadStream(filePath)
      .pipe(fs.createWriteStream(dest))
    return dest;
  })

// write build/index.html
var writeStream = fs.createWriteStream('./build/index.html');
fs.createReadStream('./app/index.html').pipe(writeStream)
writeStream.on('close', () => {
  require('wiredep')({
    src: './build/index.html',
    scripts: sources
  })
})

