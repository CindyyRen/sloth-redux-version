import axios from 'axios';

export const SIDEBAR_OPEN = 'SIDEBAR_OPEN';
export const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE';
export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN';
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
export const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SET_GRIDVIEW = 'SET_GRIDVIEW';
export const SET_LISTVIEW = 'SET_LISTVIEW';
export const UPDATE_SORT = 'UPDATE_SORT';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const TOGGLE_CART_ITEM_AMOUNT = 'TOGGLE_CART_ITEM_AMOUNT';
export const CLEAR_CART = 'CLEAR_CART';
export const COUNT_CART_TOTALS = 'COUNT_CART_TOTALS';
//-----------------------------
export const closeSidebar = () => {
  return {
    type: SIDEBAR_CLOSE,
  };
};
export const openSidebar = () => {
  return {
    type: SIDEBAR_OPEN,
  };
};

export const setGridView = () => {
  return { type: SET_GRIDVIEW };
};

export const setListView = () => {
  return { type: SET_LISTVIEW };
};
//--------------------------
export const updateSort = (value) => {
  return { type: UPDATE_SORT, payload: value };
};
export const loadProducts = (value) => {
  return { type: LOAD_PRODUCTS, payload: value };
};
export const updateFilters = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  if (name === 'category') {
    value = e.target.textContent;
  }
  if (name === 'color') {
    value = e.target.dataset.color;
  }
  if (name === 'price') {
    value = Number(value);
  }
  if (name === 'shipping') {
    value = e.target.checked;
  }
  return { type: UPDATE_FILTERS, payload: { name, value } };
};
export const clearFilters = () => {
  return { type: CLEAR_FILTERS };
};
//----------------------------------
export const addToCart = (id, color, amount, product) => {
  return { type: ADD_TO_CART, payload: { id, color, amount, product } };
};
export const removeItem = (id) => {
  return { type: REMOVE_CART_ITEM, payload: id };
};
export const toggleAmount = (id, value) => {
  return {
    type: TOGGLE_CART_ITEM_AMOUNT,
    payload: {
      id,
      value,
    },
  };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};
//-------------------------------
export const fetchProducts = (url) => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    axios
      .get(url)
      .then((res) =>
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
      )
      .catch((error) =>
        dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
      );
  };
};
export const fetchSingleProduct = (url) => {
  return async (dispatch) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const res = await axios.get(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error.message });
    }
  };
};
// export const fetchSingleProduct = (url) => async (dispatch) => {
//   dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
//   try {
//     const res = await axios.get(url);
//     dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error.message });
//   }
// };
