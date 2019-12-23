import { SHOW_SUGGESTION_LIST } from "../actions/actionTypes";

const isSuggestionListActive = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_SUGGESTION_LIST: {
      return payload.flag;
    }
    default: {
      return state;
    }
  }
};

export default isSuggestionListActive;
