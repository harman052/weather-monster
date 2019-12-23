import { AN_ERROR_OCCURRED } from "../actions/actionTypes";

const isError = (state = false, action) => {
  switch (action.type) {
    case AN_ERROR_OCCURRED: {
      return action.payload.flag;
    }
    default: {
      return state;
    }
  }
};

export default isError;
