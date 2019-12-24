import { AnyAction } from 'redux';

import {
  SET_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
} from './actionTypes';
import { UnderwaterState, Stage } from './types';

export const initialState: UnderwaterState = {
  healthPoints: 100,
  stage: Stage.Intro,
  isGamePaused: false,
};

export default (
  state = initialState,
  incomingAction: AnyAction
): UnderwaterState => {
  const action = incomingAction;

  switch (action.type) {
    case SET_HEALTH_POINTS:
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
