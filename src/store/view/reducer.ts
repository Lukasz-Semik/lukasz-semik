import type { AnyAction } from 'redux';

import {
  SET_APP_VIEW,
  SET_IS_WINDOW_FOCUSED,
  SET_IS_WINDOW_RESIZED,
  SET_WINDOW_CONTEXT,
} from './actionTypes';
import { View, ViewActionType, ViewState } from './types';

export const initialState: ViewState = {
  appView: View.Underwater,
  windowContext: undefined,
  isWindowFocused: true,
  isWindowResized: false,
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
    case SET_WINDOW_CONTEXT:
      return {
        ...state,
        windowContext: action.payload.windowContext,
      };
    case SET_IS_WINDOW_RESIZED:
      return {
        ...state,
        isWindowResized: action.payload.isWindowResized,
      };
    default:
      return state;
  }
};
