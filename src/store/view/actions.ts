import {
  SET_IS_WINDOW_FOCUSED,
  SET_APP_VIEW,
  SET_WINDOW_CONTEXT,
} from './actionTypes';
import { setIsGamePaused } from '../underwater/actions';
import { ThunkAction } from '../types';
import {
  ToggleWindowFocusedAction,
  View,
  WindowContext,
  SetAppViewAction,
  SetWindowContextAction,
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
  windowContext: WindowContext
): SetWindowContextAction => ({
  type: SET_WINDOW_CONTEXT,
  payload: {
    windowContext,
  },
});
