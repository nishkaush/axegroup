export const fetchProducts = url => {
  return async dispatch => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      return dispatch(updateAllProductsArr(data));
    } catch (error) {
      dispatch(errorUpdate("Couldn't fetch the data"));
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
