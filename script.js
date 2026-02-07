const api = document.getElementById('api');
const auth = document.getElementById('auth');
const keyBtn = document.getElementById('keyBtn');
const tokenBtn = document.getElementById('tokenBtn');
const inputField = document.getElementById('inputField');
const searchBtn = document.getElementById('searchBtn');
const timer = document.getElementById('timer');
const city = document.getElementById('city');
const temp = document.getElementById('temp');

const keys = {};

tokenBtn.addEventListener('click', function() {
    tokenBtn.disabled = true;
    let i = 60;
    let token = generateAuthToken();
    keys.apiKey = token;
    auth.innerText = `Auth Token: ` +  token;

    let t = setInterval(function() {
        timer.innerText = `Time Remaining (Auth Token): ` + i;
        i--;
        if(i === -1) {
            auth.innerText = `Auth Token: ` +  token;
            tokenBtn.disabled = false;
            clearInterval(t);
        }
    }, 1000);
})

keyBtn.addEventListener('click', function() {
    keyBtn.disabled = true;
    let token = generateAuthToken();
    keys.authToken = token;
    api.innerText = `API Key: ` +  token;
})

searchBtn.addEventListener('click', function() {
    let inputKey = prompt('Enter API Key/Auth Token: ');
    if(inputField.value === '') {
        alert('Please enter city name');
    }
    else if(timer.innerText === `Time Remaining (Auth Token): 0`) {
        alert('Please regenerate Auth Token!');
    }
    else if(inputKey === keys.apiKey || inputKey === keys.authToken) {
        getGeo(inputField.value);
    }
    else{
        alert('Please enter a valid key!');
    }
})

function generateAuthToken(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  return Array.from(array, x => chars[x % chars.length]).join('');
}

async function getGeo(cityName) {
    const geoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`;

    let output = await fetch(geoAPI);
    let response = await output.json();
    city.innerText = response.results[0].admin2;
    getCityTemp(response.results[0].longitude, response.results[0].latitude);

}

async function getCityTemp(lon, lat) {
    const cityAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    let output = await fetch(cityAPI);
    let resp = await output.json();
    temp.innerText = `Temperature: ${resp.current_weather.temperature + resp.current_weather_units.temperature}`;
}

