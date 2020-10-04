const axios = require('axios');

const getClima = async (latitud, longitud) => {

  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=231a1efaaa172d56fd51a05bd3af9215&units=metric`);

  let clima = resp.data
  // return resp.data.main.temp;
  return clima;

}

module.exports = {
  getClima
}