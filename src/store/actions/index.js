import {
  ADD_CITY,
  REMOVE_CITY,
  SHOW_SUGGESTION_LIST,
  FETCH_DATA
} from "./actionTypes";

export const addCity = cityDetails => ({
  type: ADD_CITY,
  payload: {
    cityDetails
  }
});

export const removeCity = cityId => ({
  type: REMOVE_CITY,
  payload: {
    cityId
  }
});

export const showSuggestionList = flag => ({
  type: SHOW_SUGGESTION_LIST,
  payload: {
    flag
  }
});

export const fetchData = flag => ({
  type: FETCH_DATA,
  payload: {
    flag
  }
});
