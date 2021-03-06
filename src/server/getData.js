//librabry for post and get method in node environment
const fetch = require("node-fetch");

//for env variables
const dotenv = require('dotenv');
dotenv.config();

//define a function which take the data send by the server and call the respective API for the end data.
const getAllData = async (city,dep,future) => {
    // get from geonames
    const Now = Date.now() * 0.001;
    const cityRes = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=2&username=${process.env.API_GEO}`);
    const cityData = await cityRes.json();
    let country = cityData.geonames[0].countryName;

    //get some pics url from pixabay using the city parameter given to the function
    const imageRes = await fetch(`https://pixabay.com/api/?key=${process.env.API_PIX}&q=${city}+city&image_type=photo`);
    const imageData = await imageRes.json();

    let image1,image2,image3;
    //3 images for carousal effect
    //if the image is there, update it to the recieved image, or use the default image
    if(typeof imageData.hits[0] !== 'undefined'){
    image1 = imageData.hits[0].webformatURL;
    }
    else{
     image1 = 'https://pixabay.com/get/57e8d6454e53a914f1dc846096293179153dd8e45a4c704c7c2f7ed3914cc65e_640.jpg';
    }
    //if the image is there, update it to the recieved image, or use the default image
    if(typeof imageData.hits[1] !== 'undefined'){
    image2 = imageData.hits[1].webformatURL;
    }
    else{
     image2 = 'https://pixabay.com/get/57e8d6454e53a914f1dc846096293179153dd8e45a4c704c7c2f7ed3914cc65e_640.jpg';
    }
    //if the image is there, update it to the recieved image, or use the default image
    if(typeof imageData.hits[2] !== 'undefined'){
    image3 = imageData.hits[2].webformatURL;
    }
    else{
      image3 = 'https://pixabay.com/get/57e8d6454e53a914f1dc846096293179153dd8e45a4c704c7c2f7ed3914cc65e_640.jpg';
    }
   

    // calculate the number of days left, so to pass for weather prediction on that particular day
    let daysLeft = (future - Now)/86400;
    daysLeft = Math.ceil(daysLeft);
    if(daysLeft>16){daysLeft = 15;}
    //get data from the weatherbit api
    const weatherRes = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${cityData.geonames[0].lat}&lon=${cityData.geonames[0].lng}&key=${process.env.API_BIT}&units=I&days=${daysLeft}`);
    const weatherData = await weatherRes.json();

    // return this data 
    data = {city,dep,country,daysLeft,temperature:weatherData.data[daysLeft-1].temp,humidity:weatherData.data[daysLeft-1].rh,image1,image2,image3,summary:weatherData.data[daysLeft-1].weather.description}
    return data;
  };
  module.exports = getAllData;