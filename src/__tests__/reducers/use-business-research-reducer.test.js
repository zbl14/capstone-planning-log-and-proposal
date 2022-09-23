import useBusinessSearchReducer from "../../reudcers/use-business-search-reducer";

describe("useBusinessSearchReducer", () => {
  const initialState = {
    error: null,
    isLoaded: false,
    businesses: [],
    amountResults: 0,
    searchParams: { term: "burger", location: "tustin" },
  };

  test("should succesfully throw a new error if a non-matching action type is passed into it", () => {
    expect(() => {
      useBusinessSearchReducer(initialState, { type: null });
    }).toThrowError("There is no action matching null.");
  });
});
