import type { AnyAction } from 'redux';

import { SET_APP_FUTURE_VIEW, SET_APP_VIEW } from './actionTypes';
import { View, ViewActionType, ViewState } from './types';

export const initialState: ViewState = {
  appView: View.Underwater,
  appFutureView: View.Underwater,
};

export default (state = initialState, incomingAction: AnyAction): ViewState => {
  const action = incomingAction as ViewActionType;

  switch (action.type) {
    case SET_APP_VIEW:
      return {
        ...state,
        appView: action.payload.appView,
      };
    case SET_APP_FUTURE_VIEW:
      return {
        ...state,
        appFutureView: action.payload.appView,
      };

    default:
      return state;
  }
};
