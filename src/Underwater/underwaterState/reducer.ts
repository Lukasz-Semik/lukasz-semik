import { SET_UNDERWATER_STATE } from './actionTypes';
import { UnderwaterState } from './types';

export const initialState = {
  underwater: UnderwaterState.Intro,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_UNDERWATER_STATE:
      return {
        ...state,
        underwater: action.payload.newState,
      };
    default:
      return state;
  }
};
