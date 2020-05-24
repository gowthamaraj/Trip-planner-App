const model = require("./model");
const renderUI = require('./render');
const form_addTrip = document.querySelector(".form_addTrip");
const empty = document.querySelector(".empty");
const trip = document.querySelector(".trip");
let country;

form_addTrip.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = form_addTrip.tripTo.value.trim();
  if (!city) {
    return;
  }
  const dep = form_addTrip.dep.value;
  form_addTrip.reset();
  empty.classList.add("empty_invisibe");
  trip.classList.add("trip_visible");
  const future = new Date(dep).getTime() * 0.001;

  getAllData(city,dep,future).then((data)=>{
    renderUI(data);
  }).catch(err => {
    console.log(err);
    const empty = document.querySelector('.empty');
    if(empty.classList.contains('empty_invisibe')){
      empty.classList.remove('empty_invisibe');
      trip.classList.remove('trip_visible');
  }
  });
  model.classList.remove("model_active");
});

const getAllData = async (city,dep,future) => {
    data ={city,dep,future};
    const sendData = await fetch('http://localhost:3000/fetch', {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const sendResp = await sendData.json();
      return sendResp;
  }