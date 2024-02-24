const condition = document.getElementById('condition');
const city = document.getElementById('city');
const country = document.getElementById('country');
const mainText = document.getElementById('mainText');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');

const cityInput = document.getElementById('cityInput');
const historyElm = document.getElementById('history');
const masterHistory = document.getElementById('master-history');

const API_KEY = '99aaa584377e96a97dee6770f5e52bf5';

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${API_KEY}`;


console.log(BASE_URL)