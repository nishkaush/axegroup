const initialState = {
  isLoading: false, //show and hides spinner during async call
  allProductsArr: [], //all 900 something products
  currentProductsToShowArr: [], // current page of products to show
  itemsPerPage: 8, //number of items on the current page
  lastShownItemID: null, //tracking for pagination
  errorMessage: null,
  currentPage: null //current active page number for pagination comp
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
      lastShownItemID: action.payload[state.itemsPerPage - 1].id
    };
    return newState;
  }
  //simple update the error message
  else if (action.type === "UPDATE_ERROR_DETAILS") {
    return { ...state, errorMessage: action.payload };
  }

  //showing and hiding loading spinner
  else if (action.type === "UPDATE_SPINNER") {
    return { ...state, isLoading: action.payload };
  }
  //update items per page
  //then start the page count from beginning
  //update current page to 1 (start from beginnning)
  //udpate last showing item's ID
  else if (action.type === "UPDATE_ITEMS_PER_PAGE") {
    // if (!action.payload) return { ...state };
    let newItemsPerPage = parseInt(action.payload);
    let lastShownItemID =
      newItemsPerPage && state.allProductsArr[newItemsPerPage - 1].id;
    return {
      ...state,
      itemsPerPage: newItemsPerPage,
      currentProductsToShowArr: state.allProductsArr.slice(0, newItemsPerPage),
      lastShownItemID,
      currentPage: 1
    };
  }

  // changing the current page number
  // updating the items to show on the current page
  //updating the last item shown ID
  else if (action.type === "SHOW_NEXT_PAGE") {
    let newCurrentPage = state.currentPage + 1;
    let startPoint = state.lastShownItemID;
    let endPoint = startPoint + state.itemsPerPage;
    let currentItemsToShow = state.allProductsArr.slice(startPoint, endPoint);
    return {
      ...state,
      currentPage: newCurrentPage,
      currentProductsToShowArr: [...currentItemsToShow],
      lastShownItemID: currentItemsToShow[currentItemsToShow.length - 1].id
    };
  }
  // update current page number
  // find the first item on screen and its ID
  // create start and end points to slice the main array
  else if (action.type === "SHOW_PREV_PAGE") {
    const newCurrentPage = state.currentPage - 1;
    const firstItemOnScreenRightNow = state.currentProductsToShowArr[0];
    const endPoint = firstItemOnScreenRightNow.id - 1;
    const startPoint = endPoint - state.itemsPerPage;
    const currentItemsToShow = state.allProductsArr.slice(startPoint, endPoint);
    return {
      ...state,
      currentPage: newCurrentPage,
      currentProductsToShowArr: [...currentItemsToShow],
      lastShownItemID: currentItemsToShow[currentItemsToShow.length - 1].id
    };
  }

  // use the provided val to navigate to a specific page
  else if (action.type === "SHOW_SPECIFIC_PAGE") {
    const newCurrentPage = parseInt(action.payload);
    const startPoint = (newCurrentPage - 1) * state.itemsPerPage;
    const endPoint = state.itemsPerPage * newCurrentPage;
    const currentItemsToShow = state.allProductsArr.slice(startPoint, endPoint);
    const newLastItemID = currentItemsToShow[currentItemsToShow.length - 1].id;
    return {
      ...state,
      currentPage: newCurrentPage,
      currentProductsToShowArr: [...currentItemsToShow],
      lastShownItemID: newLastItemID
    };
  }
  return state;
};

export default rootReducer;
