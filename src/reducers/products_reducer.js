import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';
const initialState = {
  isSidebarOpen: true,
  // products_loading: false,
  // products_error: false,
  // products: [],
  // featured_products: [],
  // single_product_loading: false,
  // single_product_error: false,
  // single_product: {},
};
const products_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    default:
      return state;
  }

  // throw new Error(`No Matching "${action.type}" - action type`)
};

export default products_reducer;
