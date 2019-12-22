import isFetchingData from "./isFetchingData";
import * as types from "../actions/actionTypes";

describe("isFetchingData reducer", () => {
  it("should return the initial state", () => {
    expect(isFetchingData(undefined, {})).toEqual(false);
  });

  it("should handle FETCH_DATA", () => {
    const flag = true;
    expect(
      isFetchingData(false, {
        type: types.FETCH_DATA,
        payload: { flag }
      })
    ).toEqual(true);
  });
});
