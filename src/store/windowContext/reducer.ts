import type { AnyAction } from 'redux';

import {
  SET_IS_WINDOW_FOCUSED,
  SET_IS_WINDOW_RESIZED,
  SET_WINDOW_DATA,
} from './actionTypes';
import type { WindowContextActionType, WindowContextState } from './types';

export const initialState: WindowContextState = {
  windowData: undefined,
  isWindowFocused: true,
  isWindowResized: false,
};

export default (
  state = initialState,
  incomingAction: AnyAction
): WindowContextState => {
  const action = incomingAction as WindowContextActionType;

  switch (action.type) {
    case SET_IS_WINDOW_FOCUSED:
      return {
        ...state,
        isWindowFocused: action.payload.isWindowFocused,
      };
    case SET_WINDOW_DATA:
      return {
        ...state,
        windowData: action.payload.windowData,
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
