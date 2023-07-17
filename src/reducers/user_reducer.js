const initialState = {
  myUser: null,
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, myUser: action.payload };
    default:
      return state;
  }
};
export default user_reducer;
