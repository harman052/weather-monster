import activeCities from "./activeCities";
import * as types from "../actions/actionTypes";

const city1 = {
  id: 123,
  name: "Berlin"
};

const city2 = {
  id: 456,
  name: "Munich"
};

describe("activeCities reducer", () => {
  it("should return the initial state", () => {
    expect(activeCities(undefined, {})).toEqual([]);
  });

  it("should handle ADD_CITY", () => {
    expect(
      activeCities([], {
        type: types.ADD_CITY,
        payload: { cityDetails: city1 }
      })
    ).toEqual([city1]);

    expect(
      activeCities([city1], {
        type: types.ADD_CITY,
        payload: { cityDetails: city2 }
      })
    ).toEqual([city1, city2]);
  });

  it("should handle REMOVE_CITY", () => {
    const cityId = city1.id;
    expect(
      activeCities([city1, city2], {
        type: types.REMOVE_CITY,
        payload: { cityId }
      })
    ).toEqual([city2]);
  });
});
