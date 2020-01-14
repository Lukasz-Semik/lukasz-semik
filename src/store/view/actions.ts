import {
  SET_IS_WINDOW_FOCUSED,
  SET_APP_VIEW,
  SET_WINDOW_CONTEXT,
  SET_IS_WINDOW_RESIZED,
} from './actionTypes';
import { setIsGamePaused } from '../underwater/actions';
import { ThunkAction } from '../types';
import {
  ToggleWindowFocusedAction,
  View,
  SetAppViewAction,
  SetWindowContextAction,
  SetIsWindowResizedAction,
} from './types';
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
