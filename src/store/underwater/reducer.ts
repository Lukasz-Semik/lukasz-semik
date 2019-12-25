import { AnyAction } from 'redux';

import {
  SUBSTRACT_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
} from './actionTypes';
import { UnderwaterState, Stage, UnderwaterActionType } from './types';

export const initialState: UnderwaterState = {
  healthPoints: 100,
  stage: Stage.Game,
  isGamePaused: false,
};

export default (
  state = initialState,
  incomingAction: AnyAction
): UnderwaterState => {
  const action = incomingAction as UnderwaterActionType;

  switch (action.type) {
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
