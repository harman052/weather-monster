import { combineReducers } from "redux";
import cities from "./cities";
import isSuggestionListActive from "./isSuggestionListActive";
import isFetchingData from "./isFetchingData";

export default combineReducers({
  cities,
  isSuggestionListActive,
  isFetchingData
});
