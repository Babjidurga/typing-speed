// Action Types
export const INCREMENT_KEYS_PRESSED = 'INCREMENT_KEYS_PRESSED';
export const UPDATE_ACCURACY = 'UPDATE_ACCURACY';

// Action Creators
export const incrementKeysPressed = () => {
  return {
    type: INCREMENT_KEYS_PRESSED,
  };
};

export const updateAccuracy = (accuracy) => {
  return {
    type: UPDATE_ACCURACY,
    payload: accuracy,
  };
};
