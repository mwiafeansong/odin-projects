import { capitalizeWords, formatDate, formatTime } from "./utils";


const place = document.querySelector('.place');
const dateTime = document.querySelector('.date-time');
const weatherIcon = document.querySelector('.icon');
const weatherDescription = document.querySelector('.weather-description');
const weatherTemp = document.querySelector('.loc-temp');

const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const cloudiness = document.querySelector('.cloudiness');
const windSpeed = document.querySelector('.wind-speed');


function activeBtnColor(btn) {
    const tempBtns = document.querySelectorAll('.temp-btn');
    for (const btn of tempBtns) {
        btn.classList.remove('show');
    }

    btn.classList.add('show');
}

function getUnit(btn) {
    if (btn.classList.contains('celsius')) {
        return 'metric';
    }

    if (btn.classList.contains('fahrenheit')) {
        return 'imperial';
    }
}

function fillParams(data, units) {
    
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`
    weatherDescription.textContent = capitalizeWords(data.weatherDescription);
    place.textContent = `${data.city}, ${data.country}`;
    dateTime.textContent = `${formatDate(data.unixTime, data.offset)}  ${formatTime(data.unixTime, data.offset)}`;

    if (units === 'metric') {
        weatherTemp.innerHTML = `${data.temp}&#8451`;
        feelsLike.innerHTML = `Feels like: ${data.feelsLike}&#8451`;
        windSpeed.textContent = `Wind speed: ${data.windSpeed} m/s`;
        
    }

    if (units === 'imperial') {
        weatherTemp.innerHTML = `${data.temp}&#8457`;
        feelsLike.innerHTML = `Feels like: ${data.feelsLike}&#8457`;
        windSpeed.textContent = `Wind speed: ${data.windSpeed} mph`;
    }
    
    humidity.textContent = `Humidity: ${data.humidity}%`;
    cloudiness.textContent = `Cloudiness: ${data.cloudiness}%`;
   
}


export { getUnit, fillParams, activeBtnColor }



