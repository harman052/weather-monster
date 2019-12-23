import requestStatus from "./requestStatus";
import * as types from "../actions/actionTypes";

describe("requestStatus reducer", () => {
  const initialState = {
    inProgress: false,
    failure: false
  };

  it("should return the initial state", () => {
    expect(requestStatus(undefined, {})).toEqual(initialState);
  });

  it("should handle REQUEST_IN_PROGRESS", () => {
    const flag = true;
    expect(
      requestStatus(false, {
        type: types.REQUEST_IN_PROGRESS,
        payload: { flag }
      })
    ).toEqual({ inProgress: true });
  });

  it("should handle REQUEST_FAILURE", () => {
    const flag = true;
    expect(
      requestStatus(false, {
        type: types.REQUEST_FAILURE,
        payload: { flag }
      })
    ).toEqual({ failure: true });
  });
});
