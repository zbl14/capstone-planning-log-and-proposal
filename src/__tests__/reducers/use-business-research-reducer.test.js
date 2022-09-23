import useBusinessSearchReducer from "../../reudcers/use-business-search-reducer";
import * as c from "./../../actions/ActionTypes";

describe("useBusinessSearchReducer", () => {
  let action;
  const initialState = {
    error: null,
    isLoaded: false,
    businesses: [],
    amountResults: 0,
  };

  test("should succesfully throw a new error if a non-matching action type is passed into it", () => {
    expect(() => {
      useBusinessSearchReducer(initialState, { type: null });
    }).toThrowError("There is no action matching null.");
  });

  test("successfully getting businesses should change isLoaded to true and update business, amountResults and searchParams", () => {
    const businesses = "List of businesses";
    const amountResults = 1000;
    action = {
      type: c.GET_BUSINESS_SUCCESS,
      businesses,
      amountResults,
    };

    expect(useBusinessSearchReducer(initialState, action)).toEqual({
      isLoaded: true,
      businesses: "List of businesses",
      amountResults: 1000,
      error: null,
    });
  });

  test("failing to get buesiness should change isLoaded to true and add an error message", () => {
    const error = "An error";
    action = {
      type: c.GET_BUSINESS_FAILURE,
      error,
    };

    expect(useBusinessSearchReducer(initialState, action)).toEqual({
      isLoaded: true,
      businesses: [],
      amountResults: 0,
      error: "An error",
    });
  });
});
