import { SET_IS_WINDOW_FOCUSED } from './actionTypes';
import { setIsGamePaused } from '../underwater/actions';
import { ThunkAction } from '../types';
import { ToggleWindowFocusedAction } from './types';

const toggleWindowFocused = (
  isWindowFocused?: boolean
): ToggleWindowFocusedAction => ({
  type: SET_IS_WINDOW_FOCUSED,
  payload: {
    isWindowFocused: Boolean(isWindowFocused),
  },
});

export const setIsWindowFocused = (
  isWindowFocused?: boolean
): ThunkAction => dispatch => {
  // TODO: add also check for underwater view
  if (!isWindowFocused) {
    dispatch(setIsGamePaused(true));
  }

  dispatch(toggleWindowFocused(isWindowFocused));
};
