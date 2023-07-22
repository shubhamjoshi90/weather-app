const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const tempreture =  document.querySelector('.tempreture');
const discription =  document.querySelector('.discription');
const  humidity  = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const Weather_body = document.querySelector('.weather-body');
async function checkweather(city){
  const api_key = "471285f0174f301c36333ca606ceeb84";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data  = await  fetch(`${url}`).then(response => response.json());
  if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    Weather_body.style.display = "none";
    console.log("error");
    return;
  }
  location_not_found.style.display = "none";
  Weather_body.style.display = "flex";
  tempreture.innerHTML =  `${Math.round(weather_data.main.temp - 273.15)}°C`;
  discription.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML  = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;

  switch(weather_data.weather[0].main){
    case 'Clouds':
    weather_img.src  =  "images/cloud2.jpg";
    break;

    case 'Clear':
    weather_img.src  =  "images/clear.png";
    break;

    case 'Rain':
    weather_img.src  =  "images/rain.png";
    break;

    case 'Mist':
    weather_img.src  =  "images/mist.jpg";
    break;

    case 'Snow':
    weather_img.src  =  "images/snowfall.png";
    break;

    case 'Haze':
      weather_img.src  =  "images/haze.png";
      break;

  }
  console.log(weather_data);
}
searchbtn.addEventListener('click', ()=>{
        checkweather(inputbox.value);
})