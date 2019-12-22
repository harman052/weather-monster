import { FETCH_DATA } from "../actions/actionTypes";

const isFetchingData = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload.flag;
    }
    default: {
      return state;
    }
  }
};

export default isFetchingData;
