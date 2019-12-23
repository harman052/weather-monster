import { combineReducers } from "redux";
import activeCities from "./activeCities";
import isSuggestionListActive from "./isSuggestionListActive";
import requestStatus from "./requestStatus";

export default combineReducers({
  activeCities,
  isSuggestionListActive,
  requestStatus
});
