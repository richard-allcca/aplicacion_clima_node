

const argv = require('./config/yargs').argv;
const metodos = require('./lugar/lugar');
const clima = require('./clima/clima');

// metodos.getAll()
//   .then((result) => {

//     // console.log(result.pais, result.latitud, result.longitud);
//     clima.getClima(result.latitud, result.longitud)
//       .then((resp) => {
//         console.log(`El la Temperatura Ambiente en ${result.pais} es de: ${resp.main.temp}`);
//       })
//   })
//   .catch((err) => {
//     console.log(`${argv.direccion} no es una ciudad ${err}`)
//   })

// clima.getClima(40.42955, 3.67930)
//   .then((resp) => {
//     console.log(resp.main.temp);
//   })
let direccion = argv.direccion;

const obtenerClima = async (direccion) => {
  try {
    let lugar = await metodos.getAll(direccion);

    let temper = await clima.getClima(lugar.latitud, lugar.longitud);
    // console.log(lugar);
    console.log(`El la Temperatura Ambiente en ${lugar.pais} es de: ${temper.main.temp} grados Centigrados`);

  } catch (error) {
    console.log(`no se pudo encontrar el clima de "${direccion}"`);
  }
}
obtenerClima(direccion)





