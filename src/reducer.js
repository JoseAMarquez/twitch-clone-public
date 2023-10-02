export const initialState = {
  user: null,
  follows: [],
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_FOLLOWS':
      return {
        ...state,
        follows: action.follows,
      };

    default:
      return state;
  }
};

export default reducer;
