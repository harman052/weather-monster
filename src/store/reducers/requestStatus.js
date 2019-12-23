import { REQUEST_IN_PROGRESS, REQUEST_FAILURE } from "../actions/actionTypes";

const initialState = {
  inProgress: false,
  failure: false
};

const requestStatus = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REQUEST_IN_PROGRESS:
      return { ...state, inProgress: payload.flag };
    case REQUEST_FAILURE:
      return { ...state, failure: payload.flag };
    default: {
      return state;
    }
  }
};

export default requestStatus;
