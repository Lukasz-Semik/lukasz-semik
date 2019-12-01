import { SET_GAME_STATE } from './actionTypes';
import { GameState } from './types';

export const initialState = {
  gameState: GameState.Intro,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        gameState: action.payload.newState,
      };
    default:
      return state;
  }
};
