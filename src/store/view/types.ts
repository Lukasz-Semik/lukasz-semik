import type { Action } from 'redux';

import type {
  SET_APP_VIEW,
  SET_IS_WINDOW_FOCUSED,
  SET_IS_WINDOW_RESIZED,
  SET_WINDOW_CONTEXT,
} from './actionTypes';

export enum View {
  Underwater = 'underwater',
  Surface = 'surface',
}

export interface ViewState {
  appView: View;
  isWindowFocused: boolean;
  windowContext: Window | undefined;
  isWindowResized: boolean;
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

export interface SetWindowContextAction
  extends Action<typeof SET_WINDOW_CONTEXT> {
  payload: {
    windowContext: Window;
  };
}

export interface SetIsWindowResizedAction
  extends Action<typeof SET_IS_WINDOW_RESIZED> {
  payload: {
    isWindowResized: boolean;
  };
}

export type ViewActionType =
  | ToggleWindowFocusedAction
  | SetAppViewAction
  | SetWindowContextAction
  | SetIsWindowResizedAction;
