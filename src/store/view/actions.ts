import { SET_IS_WINDOW_FOCUSED } from './actionTypes';

export const setIsWindowFocused = (isFocused?: boolean) => ({
  type: SET_IS_WINDOW_FOCUSED,
  payload: {
    isFocused,
  },
});
