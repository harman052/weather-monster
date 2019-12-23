import { combineReducers } from "redux";
import activeCities from "./activeCities";
import isSuggestionListActive from "./isSuggestionListActive";
import isFetchingData from "./isFetchingData";
import isError from "./isError";

export default combineReducers({
  activeCities,
  isSuggestionListActive,
  isFetchingData,
  isError
});
