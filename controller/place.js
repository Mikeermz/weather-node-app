const axios = require('axios');

const getLngLat = async ( city ) => {
  const encodeURL = encodeURI( city ); // encodeURI codifica la palabra para url
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {'X-RapidAPI-Key': 'acf64bd474mshebe3b12ee8fe61bp12f23djsn940678aa414c'}
  });
  
  const resp = await instance.get()

  if (resp.data.Results.length === 0) {
    throw new Error(`No results to ${city }`)
  }
  const data = resp.data.Results[0];
  const name = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {name, lat, lng}

}  

module.exports = { getLngLat }
