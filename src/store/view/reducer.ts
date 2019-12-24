import { AnyAction } from 'redux';

import { SET_IS_WINDOW_FOCUSED } from './actionTypes';
import { ViewState, ViewActionType } from './types';

export const initialState: ViewState = {
  isWindowFocused: true,
};

export default (state = initialState, incomingAction: AnyAction): ViewState => {
  const action = incomingAction as ViewActionType;
  switch (action.type) {
    case SET_IS_WINDOW_FOCUSED:
      return {
        ...state,
        isWindowFocused: action.payload.isWindowFocused,
      };
    default:
      return state;
  }
};
