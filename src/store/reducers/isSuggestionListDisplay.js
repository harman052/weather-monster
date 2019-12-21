import { SHOW_SUGGESTION_LIST } from "../actions/actionTypes";

const isSuggestionListDisplay = (state = false, action) => {
  switch (action.type) {
    case SHOW_SUGGESTION_LIST: {
      return action.payload.flag;
    }
    default: {
      return state;
    }
  }
};

export default isSuggestionListDisplay;
