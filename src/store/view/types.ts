import { Action } from 'redux';
import { SET_IS_WINDOW_FOCUSED, SET_APP_VIEW } from './actionTypes';

export enum View {
  Underwater = 'underwater',
  Surface = 'surface',
}

export interface ViewState {
  isWindowFocused: boolean;
  appView: View;
}

export interface ToggleWindowFocusedAction
  extends Action<typeof SET_IS_WINDOW_FOCUSED> {
  payload: {
    isWindowFocused: boolean;
  };
}

export interface SetAppViewAction extends Action<typeof SET_APP_VIEW> {
  payload: {
    appView: View;
  };
}

export type ViewActionType = ToggleWindowFocusedAction | SetAppViewAction;
