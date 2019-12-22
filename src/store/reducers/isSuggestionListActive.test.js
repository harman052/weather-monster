import isSuggestionListActive from "./isSuggestionListActive";
import * as types from "../actions/actionTypes";

describe("isSuggestionListActive reducer", () => {
  it("should return the initial state", () => {
    expect(isSuggestionListActive(undefined, {})).toEqual(false);
  });

  it("should handle SHOW_SUGGESTION_LIST", () => {
    const flag = true;
    expect(
      isSuggestionListActive(false, {
        type: types.SHOW_SUGGESTION_LIST,
        payload: { flag }
      })
    ).toEqual(true);
  });
});
