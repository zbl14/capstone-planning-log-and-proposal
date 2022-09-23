import * as c from "../actions/ActionTypes";

const useBusinessSearchReducer = (state, action) => {
  switch (action.type) {
    case c.GET_BUSINESS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        businesses: action.businesses,
        amountResults: action.amountResults,
      };
    case c.GET_BUSINESS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error,
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default useBusinessSearchReducer;
