import { INCREMENT_KEYS_PRESSED, UPDATE_ACCURACY } from './actions';

const initialState = {
  keysPressed: 0,
  accuracy: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_KEYS_PRESSED:
      return {
        ...state,
        keysPressed: state.keysPressed + 1,
      };
    case UPDATE_ACCURACY:
      return {
        ...state,
        accuracy: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
