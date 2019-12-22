import cities from "./cities";
import * as types from "../actions/actionTypes";

const city1 = {
  id: 123,
  name: "Berlin"
};

const city2 = {
  id: 456,
  name: "Munich"
};

describe("cities reducer", () => {
  it("should return the initial state", () => {
    expect(cities(undefined, {})).toEqual([]);
  });

  it("should handle ADD_CITY", () => {
    expect(
      cities([], {
        type: types.ADD_CITY,
        payload: { cityDetails: city1 }
      })
    ).toEqual([city1]);

    expect(
      cities([city1], {
        type: types.ADD_CITY,
        payload: { cityDetails: city2 }
      })
    ).toEqual([city1, city2]);
  });

  it("should handle REMOVE_CITY", () => {
    const cityId = city1.id;
    expect(
      cities([city1, city2], {
        type: types.REMOVE_CITY,
        payload: { cityId }
      })
    ).toEqual([city2]);
  });
});
