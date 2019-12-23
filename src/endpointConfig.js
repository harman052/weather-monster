import { units } from "./config";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?id=";
const KEY = "a8769f8dbcec1ba81683a2151cacb6b1";
export const weatherEndpoint = location =>
  `${CORS_PROXY}/${API_URL}${location}&units=${units}&APPID=${KEY}`;
