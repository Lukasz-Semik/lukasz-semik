import { SET_IS_WINDOW_FOCUSED, SET_APP_VIEW } from './actionTypes';
import { setIsGamePaused } from '../underwater/actions';
import { ThunkAction } from '../types';
import { ToggleWindowFocusedAction, View } from './types';
import { getIsUnderwaterView } from './selectors';

export const toggleWindowFocused = (
  isWindowFocused?: boolean
): ToggleWindowFocusedAction => ({
  type: SET_IS_WINDOW_FOCUSED,
  payload: {
    isWindowFocused: Boolean(isWindowFocused),
  },
});

export const setIsWindowFocused = (isWindowFocused?: boolean): ThunkAction => (
  dispatch,
  getState
) => {
  if (!isWindowFocused && getIsUnderwaterView(getState())) {
    dispatch(setIsGamePaused(true));
  }

  dispatch(toggleWindowFocused(isWindowFocused));
};

export const setAppView = (appView: View) => ({
  type: SET_APP_VIEW,
  payload: {
    appView,
  },
});
