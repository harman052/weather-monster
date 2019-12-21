import { ADD_CITY, REMOVE_CITY } from "../actions/actionTypes";

const cities = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY: {
      return [...state, action.payload.cityDetails];
    }
    case REMOVE_CITY: {
      return state.filter(city => city.id !== action.payload.cityId);
    }
    default: {
      return state;
    }
  }
};

export default cities;
