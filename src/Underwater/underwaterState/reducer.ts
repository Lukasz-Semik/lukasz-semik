import {
  SET_UNDERWATER_STATE,
  SET_GAME_PAUSE,
  SET_UNDERWATER_WINDOW_FOCUS,
} from './actionTypes';
import { UnderwaterState, State } from './types';

export const initialState: State = {
  underwater: UnderwaterState.Game,
  isGamePaused: false,
  isUnderwaterWindowFocused: true,
};

interface ActionPayload {
  newState?: State;
  isGamePaused?: boolean;
  isFocused?: boolean;
}

export const reducer = (
  state = initialState,
  action: Action<ActionPayload>
) => {
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
    case SET_UNDERWATER_WINDOW_FOCUS:
      return {
        ...state,
        isUnderwaterWindowFocused: action.payload.isFocused,
      };
    default:
      return state;
  }
};
