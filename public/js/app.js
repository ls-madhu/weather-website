const weatherForm = document.querySelector("#weather_form");
const search = document.querySelector("#weather_form input");
const locationPara = document.querySelector("#location");
const weatherPara = document.querySelector("#weather");
const errorPara = document.querySelector("#error");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorPara.textContent = "";
  locationPara.textContent = "Loading...";
  weatherPara.textContent = "";
  fetch(`http://localhost:3000/weather?location=${search.value}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        locationPara.textContent = "";
        errorPara.textContent = data.error;
      } else {
        locationPara.textContent = data.location;
        weatherPara.textContent = data.forecast;
      }
    });
});
