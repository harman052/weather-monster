import { units } from "../config";
import getData from "./httpMethods";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?id=";
const KEY = "a8769f8dbcec1ba81683a2151cacb6b1";

export const getWeatherEndpoint = async locationId => {
  const url = `${CORS_PROXY}/${API_URL}${locationId}&units=${units}&APPID=${KEY}`;
  return await getData(url);
};
