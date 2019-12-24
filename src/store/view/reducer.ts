import { AnyAction } from 'redux';

import { SET_IS_WINDOW_FOCUSED, SET_APP_VIEW } from './actionTypes';
import { ViewState, ViewActionType, View } from './types';

export const initialState: ViewState = {
  isWindowFocused: true,
  appView: View.Underwater,
};

export default (state = initialState, incomingAction: AnyAction): ViewState => {
  const action = incomingAction as ViewActionType;

  switch (action.type) {
    case SET_IS_WINDOW_FOCUSED:
      return {
        ...state,
        isWindowFocused: action.payload.isWindowFocused,
      };
    case SET_APP_VIEW:
      return {
        ...state,
        appView: action.payload.appView,
      };
    default:
      return state;
  }
};
