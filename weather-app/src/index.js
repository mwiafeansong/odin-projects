import { fillParams, getUnit, activeBtnColor } from './weatherDom';
import './style.css';
import { getURL, getWeather } from './weatherapi';

const form = document.querySelector('form');
const locationInput = document.querySelector('.location');
const tempBtns = document.querySelectorAll('.temp-btn');
const modal = document.querySelector('.modal');
const weatherLoc = document.querySelector('.loc');

let location;
let unit = 'metric';

async function getWeatherParams(location, units) {
  let url = getURL(location, units);
  let start = new Date().getTime();

  //remove display for the weather parameters
  weatherLoc.style.visibility = 'hidden';

  //add the laoding modal
  modal.textContent = 'Loading...';
  modal.classList.remove('invisible');

  let data = await getWeather(url);
  let end = new Date().getTime();

  //get duration taken to fetch the data
  let durationInSeconds = (end - start) / 1000;

  //display details on page if fetch didn't throw an error
  if (data !== null) {
    fillParams(data, units);
  } else {
    return null;
  }

  //remove the loading modal
  modal.classList.add('invisible');

  //display the weather parameters
  weatherLoc.style.visibility = 'visible';

  return durationInSeconds;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  //get location entered
  location = locationInput.value;

  //load the weather parameters while getting duration taken to fetch the parameters
  let duration = await getWeatherParams(location, unit);

  //let the input field text disppear when weather parameters have been loaded
  setTimeout(function () {
    locationInput.value = '';
  }, duration);
});

for (const btn of tempBtns) {
  btn.addEventListener('click', (e) => {
    //get the unit when user clicks the corresponding button
    unit = getUnit(e.target);

    //change background color of the clicked button
    activeBtnColor(e.target);

    //fetch and dsiplay the weather parameters with the new unit provided
    if (location !== undefined) getWeatherParams(location, unit);
  });
}
