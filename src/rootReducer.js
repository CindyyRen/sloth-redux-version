import { combineReducers } from 'redux';
import cart_reducer from './reducers/cart_reducer';
import filter_reducer from './reducers/filter_reducer';
import products_reducer from './reducers/products_reducer';

export const rootReducer = combineReducers({
  cart: cart_reducer,
  filter: filter_reducer,
  products: products_reducer,
});
