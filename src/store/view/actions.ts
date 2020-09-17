import { SET_APP_FUTURE_VIEW, SET_APP_VIEW } from './actionTypes';
import type { SetAppFutureViewAction, SetAppViewAction, View } from './types';

export const setAppView = (appView: View): SetAppViewAction => ({
  type: SET_APP_VIEW,
  payload: {
    appView,
  },
});

export const setAppFutureView = (appView: View): SetAppFutureViewAction => ({
  type: SET_APP_FUTURE_VIEW,
  payload: {
    appView,
  },
});
