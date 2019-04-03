const city = require('./controller/place');
const weather = require('./controller/weather');
const { argv } = require('./config/yargs');

const getInfo = async(place) => {
  try {
    const coords = await city.getLngLat(place);
    const temp = await weather.getWeather(coords.lat, coords.lng)
    return `El clima de ${coords.name} es de ${temp}.`;
  } catch(error){
    return `No se pudo determinar el clima de ${city}.`;
  }
}

getInfo(argv.city)
         .then(console.log)
         .catch(console.log)
