const addTrip = document.querySelector(".element_addTrip");
const model = document.querySelector(".model_addTrip_bg");
const cancel = document.querySelector(".cancel");
addTrip.addEventListener("click", (e) => {
  model.classList.add("model_active");
});
cancel.addEventListener("click", (e) => {
  model.classList.remove("model_active");
});
module.exports = model;
