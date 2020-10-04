const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demandCommand: true
  }
}).argv;




module.exports = {
  argv
}