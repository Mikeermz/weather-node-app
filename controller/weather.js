const axios = require('axios');

const getWeather = async ( lat, lng ) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a3bfff614cdfde8b1b4905e098a80672&units=metric`)

  return resp.data.main.temp
}  

module.exports = { getWeather }
