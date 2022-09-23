import * as c from "./ActionTypes";

export const getBusinessSuccess = (businesses, amountResults) => ({
  type: c.GET_BUSINESS_SUCCESS,
  businesses,
  amountResults,
});

export const getBusinessFailure = (error) => ({
  type: c.GET_BUSINESS_FAILURE,
  error,
});
