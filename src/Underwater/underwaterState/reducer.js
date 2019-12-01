import { SET_GAME_STATE } from './actionTypes';
import { gameState } from './constants';

export const initialState = {
  gameState: gameState.intro,
};

export const reducer = (state = initialState, action) => {
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
