import { Action } from 'redux';
import {
  SET_IS_WINDOW_FOCUSED,
  SET_APP_VIEW,
  SET_WINDOW_CONTEXT,
} from './actionTypes';

export enum View {
  Underwater = 'underwater',
  Surface = 'surface',
}

export interface WindowContext {
  width: number;
  height: number;
  isBrowser: boolean;
}

export interface ViewState {
  isWindowFocused: boolean;
  appView: View;
  windowContext: WindowContext;
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
    windowContext: WindowContext;
  };
}

export type ViewActionType =
  | ToggleWindowFocusedAction
  | SetAppViewAction
  | SetWindowContextAction;
