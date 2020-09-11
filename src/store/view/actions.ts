import { ThunkAction } from '../types';
import { setIsGamePaused } from '../underwater/actions';
import {
  SET_APP_VIEW,
  SET_IS_WINDOW_FOCUSED,
  SET_IS_WINDOW_RESIZED,
  SET_WINDOW_CONTEXT,
} from './actionTypes';
import { getIsUnderwaterView } from './selectors';
import {
  SetAppViewAction,
  SetIsWindowResizedAction,
  SetWindowContextAction,
  ToggleWindowFocusedAction,
  View,
} from './types';

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

export const setAppView = (appView: View): SetAppViewAction => ({
  type: SET_APP_VIEW,
  payload: {
    appView,
  },
});

export const setWindowContext = (
  windowContext: Window
): SetWindowContextAction => ({
  type: SET_WINDOW_CONTEXT,
  payload: {
    windowContext,
  },
});

export const setIsWindowResized = (
  isWindowResized: boolean
): SetIsWindowResizedAction => ({
  type: SET_IS_WINDOW_RESIZED,
  payload: {
    isWindowResized,
  },
});
