export const fetchProducts = url => {
  return async dispatch => {
    dispatch(updateSpinner(true));
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      dispatch(updateSpinner(false));
      return dispatch(updateAllProductsArr(data));
    } catch (error) {
      dispatch(updateSpinner(false));
      return dispatch(errorUpdate("Couldn't fetch the data"));
    }
  };
};

export const updateAllProductsArr = data => {
  return { type: "UPDATE_ALL_PRODUCTS_ARR", payload: data };
};

export const errorUpdate = errorMsg => {
  return { type: "UPDATE_ERROR_DETAILS", payload: errorMsg };
};

export const updateItemsPerPage = val => {
  return { type: "UPDATE_ITEMS_PER_PAGE", payload: val };
};

export const updateSpinner = val => {
  return { type: "UPDATE_SPINNER", payload: val };
};

// export const updateCurrentPage = val => {
//   return { type: "UPDATE_CURRENT_PAGE", payload: val };
// };

export const showNextPage = () => {
  return { type: "SHOW_NEXT_PAGE" };
};

export const showPrevPage = () => {
  return { type: "SHOW_PREV_PAGE" };
};

export const showSpecificPage = val => {
  return { type: "SHOW_SPECIFIC_PAGE", payload: val };
};
