const API_URL =
  "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=";
const KEY = "a8769f8dbcec1ba81683a2151cacb6b1";
const units = "metric";
export const header = "Weather Monster";
export const searchPlaceholderText = "Enter city name here";
export const notifications = {
  loadingText: "Loading...",
  noMatchesFound: "No matches found.",
  noCityAdded: {
    heading: "No cities added",
    text: "Search and add cities from above."
  }
};
export const weatherEndpoint = location =>
  `${API_URL}${location}&units=${units}&APPID=${KEY}`;
