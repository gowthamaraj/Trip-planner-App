const fetch = require("node-fetch");
const getAllData = async (city,dep,future) => {
    // get from geonames
    const Now = Date.now() * 0.001;
    const cityRes = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=2&username=gowthamaraj`);
    const cityData = await cityRes.json();
    let country = cityData.geonames[0].countryName;
    const imageRes = await fetch(`https://pixabay.com/api/?key=16702619-050e1a8f9aa4137888285d80c&q=${city}+city&image_type=photo`);
    const imageData = await imageRes.json();
    const image = imageData.hits[0].webformatURL;
    let daysLeft = (future - Now)/86400;
    daysLeft = Math.ceil(daysLeft);
    if(daysLeft>16){daysLeft = 15;}
    const weatherRes = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${cityData.geonames[0].lat}&lon=${cityData.geonames[0].lng}&key=d475eeb87f5645f8b8fb8d3c2f376033&units=I&days=${daysLeft}`);
    const weatherData = await weatherRes.json();
    data = {city,dep,country,daysLeft,temperature:weatherData.data[daysLeft-1].temp,humidity:weatherData.data[daysLeft-1].rh,image,summary:weatherData.data[daysLeft-1].weather.description}
    return data;
  };
  module.exports = getAllData;