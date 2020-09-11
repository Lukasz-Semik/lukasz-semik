import { AnyAction } from 'redux';

import { gameParameters } from 'src/constants/game';

import {
  ADD_SCORE,
  CHANGE_HEALTH_POINTS,
  RESET_GAME,
  SET_IS_GAME_PAUSED,
  SET_UNDERWATER_STAGE,
} from './actionTypes';
import { Stage, UnderwaterActionType, UnderwaterState } from './types';

export const initialState: UnderwaterState = {
  healthPoints: gameParameters.health.startingPoints,
  score: 0,
  stage: Stage.Intro,
  isGamePaused: false,
};

export default (
  state = initialState,
  incomingAction: AnyAction
): UnderwaterState => {
  const action = incomingAction as UnderwaterActionType;

  switch (action.type) {
    case RESET_GAME:
      return {
        ...state,
        score: initialState.score,
        healthPoints: initialState.healthPoints,
        isGamePaused: false,
      };
    case CHANGE_HEALTH_POINTS:
      return {
        ...state,
        healthPoints: state.healthPoints + action.payload.value,
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.payload.value,
      };
    case SET_UNDERWATER_STAGE:
      return {
        ...state,
        stage: action.payload.stage,
      };
    case SET_IS_GAME_PAUSED:
      return {
        ...state,
        isGamePaused: action.payload.isGamePaused,
      };
    default:
      return state;
  }
};
