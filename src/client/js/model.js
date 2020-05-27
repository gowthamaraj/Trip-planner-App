const addTrip = document.querySelector(".element_addTrip");
const model = document.querySelector(".model_addTrip_bg");
const cancel = document.querySelector(".cancel");

// for makng the model section visible 
addTrip.addEventListener("click", (e) => {
  model.classList.add("model_active");
});
//to remove the model section on clicking the cancel button
cancel.addEventListener("click", (e) => {
  model.classList.remove("model_active");
});

module.exports = {addTrip,cancel,model}