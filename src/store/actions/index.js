import {
  ADD_CITY,
  REMOVE_CITY,
  SHOW_SUGGESTION_LIST,
  REQUEST_IN_PROGRESS,
  REQUEST_FAILURE
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

export const requestInProgress = flag => ({
  type: REQUEST_IN_PROGRESS,
  payload: {
    flag
  }
});

export const requestFailure = flag => ({
  type: REQUEST_FAILURE,
  payload: {
    flag
  }
});
