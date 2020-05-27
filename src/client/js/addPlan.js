const model = require("./model").model;
const renderUI = require('./render');
const form_addTrip = document.querySelector(".form_addTrip");
const empty = document.querySelector(".empty");
const trip = document.querySelector(".trip");
let country;


//event listener to addTrip form
form_addTrip.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = form_addTrip.tripTo.value.trim();
  //return when no city is given
  if (!city) {
    return;
  }

  const dep = form_addTrip.dep.value;
  //return when no depature date is given
  if (!dep) {
    return;
  }

  form_addTrip.reset();

  //to close the form
  empty.classList.add("empty_invisibe");
  trip.classList.add("trip_visible");

  //getting the time to pass for the generation of daysLeft on server side
  const future = new Date(dep).getTime() * 0.001;


//call the function to get data and render the section with info
  getAllData(city,dep,future).then((data)=>{
    renderUI(data);
  }).catch(err => {
    console.log(err);
    const empty = document.querySelector('.empty');

    //making the error section visible on any error during fetch or rendering
    if(empty.classList.contains('empty_invisibe')){
      empty.classList.remove('empty_invisibe');
      trip.classList.remove('trip_visible');
  }
  });
  model.classList.remove("model_active");
});

//post the required data to the node server and get the response from it.
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