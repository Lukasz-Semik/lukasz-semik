import type { Action } from 'redux';

import type { SET_APP_FUTURE_VIEW, SET_APP_VIEW } from './actionTypes';

export enum View {
  Underwater = 'underwater',
  Surface = 'surface',
}

export interface ViewState {
  appView: View;
  appFutureView: View;
}

export interface SetAppViewAction extends Action<typeof SET_APP_VIEW> {
  payload: {
    appView: View;
  };
}

export interface SetAppFutureViewAction
  extends Action<typeof SET_APP_FUTURE_VIEW> {
  payload: {
    appView: View;
  };
}

export type ViewActionType = SetAppViewAction | SetAppFutureViewAction;
