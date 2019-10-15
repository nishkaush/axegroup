const initialState = {
  allProductsArr: [],
  currentProductsToShowArr: [],
  itemsPerPage: 8,
  lastFetchedItemID: null,
  errorMessage: null
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_ALL_PRODUCTS_ARR") {
    let newState = {
      ...state,
      allProductsArr: [...action.payload],
      currentProductsToShowArr: action.payload.slice(0, state.itemsPerPage)
    };
    return newState;
  } else if (action.type === "UPDATE_ERROR_DETAILS") {
    return { ...state, errorMessage: action.payload };
  }
  return state;
};

export default rootReducer;
