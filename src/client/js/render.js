// data parameter must contain the below values
// 1. city
// 2. country
// 3. dep
// 4. daysLeft
// 5. temperature
// 6. humidity
// 7. image1,2,3

const renderUI = async (data) => {
  // to update the location
  document.querySelector(
    ".location"
  ).innerHTML = `${data.city},${data.country}`;
  // to update the depature time
  document.querySelector(".time").innerHTML = data.dep;
  // to update the city name
  document.querySelector(".info_left_city").innerHTML = data.city;
  // days left for the trip day
  document.querySelector(".info_left_daysLeft").innerHTML = data.daysLeft;
  // it updates the weather and description received from thr API
  document.querySelector(
    ".info_weather"
  ).innerHTML = `<p><i class="fa fa-cloud" aria-hidden="true"></i><span class="info_text">Temp:</span>${data.temperature}&deg;F, 
      <span class="info_text">Humidity:</span>${data.humidity}</p><p class="summary"><i class="fa fa-rss" aria-hidden="true"></i>Summary: ${data.summary}</p>`;
  // update the src of images for carousel
  document.querySelector(".image1").setAttribute("src", data.image1);
  document.querySelector(".image2").setAttribute("src", data.image2);
  document.querySelector(".image3").setAttribute("src", data.image3);
};
module.exports = renderUI;
