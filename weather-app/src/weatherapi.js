const modal = document.querySelector('.modal');
function convertData(data) {
  return {
    city: data.name,
    country: data.sys.country,
    unixTime: data.dt,
    offset: data.timezone,
    weatherMain: data.weather[0].main,
    weatherDescription: data.weather[0].description,
    weatherIcon: data.weather[0].icon,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    temp: data.main.temp,
    cloudiness: data.clouds.all,
    windSpeed: data.wind.speed,
  };
}

function getURL(location, units) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=036aa012274dcca101f8571668aba595`;

  return url;
}

async function getWeather(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = convertData(await response.json());

    return data;
  } catch (error) {
    modal.textContent = error;
    return null;
  }
}

export { getURL, getWeather };
