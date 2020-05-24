// want data of 
// 1. city
// 2. country
// 3. dep
// 4. daysLeft
// 5. temperature
// 6. humidity
// 7. image

const renderUI = async (data) => {    document.querySelector(".location").innerHTML = `${data.city},${data.country}`;
    document.querySelector(".time").innerHTML = data.dep;
    document.querySelector(".info_left").innerHTML = `<i class="fa fa-dot-circle-o" aria-hidden="true"></i>${data.city} is ${data.daysLeft} days away`;
    document.querySelector(".info_weather").innerHTML = `<p><i class="fa fa-cloud" aria-hidden="true"></i><span class="info_text">Temp:</span>${data.temperature}&deg;F, 
      <span class="info_text">Humidity:</span>${data.humidity}</p><p class="summary"><i class="fa fa-rss" aria-hidden="true"></i>Summary: ${data.summary}</p>`;
    document.querySelector(".img_section img").setAttribute("src", data.image);
  };
  module.exports = renderUI;