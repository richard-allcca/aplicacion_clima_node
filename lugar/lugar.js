
const argv = require('yargs').argv;
const axios = require('axios');


const getAll = async (direccion) => {

  const encodeURL = encodeURI(direccion);
  // const encodeURL = encodeURI(direccion);
  // TODO encode sirve para evitar errores de interpretación con caracteres especiales
  // console.log(encodeURL);

  const instance = axios.create({
    baseURL: `https://geocode.xyz/Hauptstr.,+57632+${encodeURL}?json=1`
  })
  // console.log(resp.data.error, 'fin');
  // console.log(resp.data.matches);
  //   console.log(resp.data.error.code, 'codigo');

  const resp = await instance.get()
  let nada = resp.data.matches;
  // console.log(resp.data);
  if (nada === null) {
    throw new Error()
  }
  const { standard, longt, latt } = resp.data;
  // console.log(standard);
  const pais = `${standard.addresst}-${standard.countryname}`,
    latitud = latt,
    longitud = longt;

  return {
    pais,
    latitud,
    longitud
  }

}

module.exports = {
  getAll
}
      // .then((resp) => {
      //   // console.log(resp.data.matches);
      //   let nada = resp.data.matches;
      //   if (nada === null) {
      //     throw Error(`${encodeURL} no es una ciudad`);
      //   }

      //   let { standard, longt, latt } = resp.data;
      //   console.log(standard.city, longt, latt);
      // })
      // .catch((err) => {
      //   console.log(`Tu busqueda no produjo ningun resultado ${err}`);
      // })
