import type { ThunkAction } from '../types';
import { setIsGamePaused } from '../underwater/actions';
import { getIsViewSet } from '../view/selectors';
import { View } from '../view/types';
import {
  SET_IS_WINDOW_FOCUSED,
  SET_IS_WINDOW_RESIZED,
  SET_WINDOW_DATA,
} from './actionTypes';
import type { SetWindowDataAction, ToggleWindowFocusedAction } from './types';

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
  if (!isWindowFocused && getIsViewSet(View.Underwater, getState())) {
    dispatch(setIsGamePaused(true));
  }

  dispatch(toggleWindowFocused(isWindowFocused));
};

export const setWindowData = (windowData: Window): SetWindowDataAction => ({
  type: SET_WINDOW_DATA,
  payload: {
    windowData,
  },
});

export const setIsWindowResized = (isWindowResized: boolean): ThunkAction => (
  dispatch,
  getState
) => {
  dispatch({
    type: SET_IS_WINDOW_RESIZED,
    payload: {
      isWindowResized:
        isWindowResized && getIsViewSet(View.Underwater, getState()),
    },
  });
};
