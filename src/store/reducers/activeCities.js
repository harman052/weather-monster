import { ADD_CITY, REMOVE_CITY } from "../actions/actionTypes";

const activeCities = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CITY: {
      return [...state, payload.cityDetails];
    }
    case REMOVE_CITY: {
      return state.filter(city => city.id !== payload.cityId);
    }
    default: {
      return state;
    }
  }
};

export default activeCities;
