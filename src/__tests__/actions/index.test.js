import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("useBusinessResearch actions", () => {
  it("getBusinessSuccess should create GET_BUSINESS_SUCCESS ation", () => {
    const businesses = "List of businesses";
    const amountResults = 1000;
    expect(actions.getBusinessSuccess(businesses, amountResults)).toEqual({
      type: c.GET_BUSINESS_SUCCESS,
      businesses,
      amountResults,
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
