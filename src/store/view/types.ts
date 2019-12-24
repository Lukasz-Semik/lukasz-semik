import { Action } from 'redux';
import { SET_IS_WINDOW_FOCUSED } from './actionTypes';

export interface ViewState {
  isWindowFocused: boolean;
}

export interface ToggleWindowFocusedAction
  extends Action<typeof SET_IS_WINDOW_FOCUSED> {
  payload: {
    isWindowFocused: boolean;
  };
}

export type ViewActionType = ToggleWindowFocusedAction;
