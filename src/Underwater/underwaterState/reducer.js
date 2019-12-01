import { SET_GAME_STATE } from './actionTypes';

export const initialState = {
  gameState: 'intro',
};

export const reducer = (state = initialState, action) => {
  console.log(action);
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
