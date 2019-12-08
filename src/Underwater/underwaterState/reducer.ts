import { SET_UNDERWATER_STATE, SET_GAME_PAUSE } from './actionTypes';
import { UnderwaterState } from './types';

export const initialState = {
  underwater: UnderwaterState.Intro,
  isGamePaused: false,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_UNDERWATER_STATE:
      return {
        ...state,
        underwater: action.payload.newState,
      };
    case SET_GAME_PAUSE:
      return {
        ...state,
        isGamePaused: action.payload.isGamePaused,
      };
    default:
      return state;
  }
};
