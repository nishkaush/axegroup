const initialState = {
  allProductsArr: [],
  currentProductsToShowArr: [],
  itemsPerPage: 8,
  lastShownItemID: null,
  errorMessage: null,
  currentPage: null
};

const rootReducer = (state = initialState, action) => {
  //add the the data to the allproducts arr
  // slice the first array from 0 - whatever the itemsPer page is
  //update current page to 1 (start from beginnning)
  //udpate last showing item's ID --> going to help with pagination
  if (action.type === "UPDATE_ALL_PRODUCTS_ARR") {
    let newState = {
      ...state,
      currentPage: 1,
      allProductsArr: [...action.payload],
      currentProductsToShowArr: action.payload.slice(0, state.itemsPerPage),
      lastShownItemID: action.payload[state.itemsPerPage - 1]
    };
    return newState;
  }
  //simple update the error message
  else if (action.type === "UPDATE_ERROR_DETAILS") {
    return { ...state, errorMessage: action.payload };
  }
  //update items per page
  //then start the page count from beginning
  //update current page to 1 (start from beginnning)
  //udpate last showing item's ID
  else if (action.type === "UPDATE_ITEMS_PER_PAGE") {
    // if (!action.payload) return { ...state };
    let newItemsPerPage = parseInt(action.payload);
    return {
      ...state,
      itemsPerPage: newItemsPerPage,
      currentProductsToShowArr: state.allProductsArr.slice(0, newItemsPerPage),
      lastShownItemID: state.allProductsArr[newItemsPerPage - 1],
      currentPage: 1
    };
  }
  return state;
};

export default rootReducer;
