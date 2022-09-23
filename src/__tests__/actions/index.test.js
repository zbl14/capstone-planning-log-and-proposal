import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("useBusinessResearch actions", () => {
  it("getBusinessSuccess should create GET_BUSINESS_SUCCESS ation", () => {
    const businesses = "List of businesses";
    const amountResults = 1000;
    const searchParams = { term: "burger", location: "irvine" };
    expect(
      actions.getBusinessSuccess(businesses, amountResults, searchParams)
    ).toEqual({
      type: c.GET_BUSINESS_SUCCESS,
      businesses,
      amountResults,
      searchParams,
    });
  });

  it("getBusinessFailure should create GET_BUSINESS_FAILURE ation", () => {
    const error = "An error";
    expect(actions.getBusinessFailure(error)).toEqual({
      type: c.GET_BUSINESS_FAILURE,
      error,
    });
  });
});
