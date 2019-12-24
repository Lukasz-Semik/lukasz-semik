import { SET_IS_WINDOW_FOCUSED } from './actionTypes';
import { setIsGamePaused } from '../underwater/actions';
import { ThunkAction } from '../types';

export const setIsWindowFocused = (
  isWindowFocused?: boolean
): ThunkAction => dispatch => {
  // TODO: add also check for underwater view
  if (!isWindowFocused) {
    dispatch(setIsGamePaused(true));
  }

  dispatch({
    type: SET_IS_WINDOW_FOCUSED,
    payload: {
      isWindowFocused,
    },
  });
};
