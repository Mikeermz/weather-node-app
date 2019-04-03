const argv = require('yargs').options({
  city: {
    alias: 'c',
    desc: 'Show weather city',
    demand: true
  }
}).argv

module.exports = { argv }
