import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
const initialState = {}
const filter_reducer = (state=initialState, action) => {
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
