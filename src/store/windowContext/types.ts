import type { Action } from 'redux';

import type {
  SET_IS_WINDOW_FOCUSED,
  SET_IS_WINDOW_RESIZED,
  SET_WINDOW_DATA,
} from './actionTypes';

export interface WindowContextState {
  isWindowFocused: boolean;
  windowData: Window | undefined;
  isWindowResized: boolean;
}

export interface ToggleWindowFocusedAction
  extends Action<typeof SET_IS_WINDOW_FOCUSED> {
  payload: {
    isWindowFocused: boolean;
  };
}

export interface SetWindowDataAction extends Action<typeof SET_WINDOW_DATA> {
  payload: {
    windowData: Window;
  };
}

export interface SetIsWindowResizedAction
  extends Action<typeof SET_IS_WINDOW_RESIZED> {
  payload: {
    isWindowResized: boolean;
  };
}

export type WindowContextActionType =
  | ToggleWindowFocusedAction
  | SetWindowDataAction
  | SetIsWindowResizedAction;
