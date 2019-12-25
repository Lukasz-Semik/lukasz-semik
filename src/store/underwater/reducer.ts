import { AnyAction } from 'redux';

import { HEALTH_POINTS_STARTER } from 'src/constants/underwater';

import {
  SUBSTRACT_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
  RESET_GAME,
} from './actionTypes';
import { UnderwaterState, Stage, UnderwaterActionType } from './types';

export const initialState: UnderwaterState = {
  healthPoints: HEALTH_POINTS_STARTER,
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
        healthPoints: initialState.healthPoints,
        isGamePaused: false,
      };
    case SUBSTRACT_HEALTH_POINTS:
      return {
        ...state,
        healthPoints: state.healthPoints - action.payload.value,
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
