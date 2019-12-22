import * as actions from ".";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to add a city", () => {
    const cityDetails = {
      id: 123,
      name: "Berlin"
    };
    const expectedAction = {
      type: types.ADD_CITY,
      payload: {
        cityDetails
      }
    };
    expect(actions.addCity(cityDetails)).toEqual(expectedAction);
  });

  it("should create an action to remove a city", () => {
    const cityId = 123;
    const expectedAction = {
      type: types.REMOVE_CITY,
      payload: {
        cityId
      }
    };
    expect(actions.removeCity(cityId)).toEqual(expectedAction);
  });

  it("should create an action to update suggestion list flag", () => {
    const flag = true;
    const expectedAction = {
      type: types.SHOW_SUGGESTION_LIST,
      payload: {
        flag
      }
    };
    expect(actions.showSuggestionList(flag)).toEqual(expectedAction);
  });
});
