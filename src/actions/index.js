import * as c from "./ActionTypes";

export const getBusinessSuccess = (
  businesses,
  amountResults,
  searchParams
) => ({
  type: c.GET_BUSINESS_SUCCESS,
  businesses,
  amountResults,
  searchParams,
});

export const getBusinessFailure = (error) => ({
  type: c.GET_BUSINESS_FAILURE,
  error,
});
