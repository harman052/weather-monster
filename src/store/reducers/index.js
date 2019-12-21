import { combineReducers } from "redux";
import cities from "./cities";
import isSuggestionListDisplay from "./isSuggestionListDisplay";

export default combineReducers({ cities, isSuggestionListDisplay });
