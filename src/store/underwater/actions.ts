import {
  SUBSTRACT_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
  RESET_GAME,
} from './actionTypes';
import {
  Stage,
  SubstractHealthPointsAction,
  SetIsGamePausedAction,
  SetUnderwaterStageAction,
  ResetGameAction,
} from './types';
import { ThunkAction } from '../types';

export const substractHealthPoints = (
  value: number
): SubstractHealthPointsAction => ({
  type: SUBSTRACT_HEALTH_POINTS,
  payload: {
    value,
  },
});

export const setIsGamePaused = (
  isGamePaused: boolean
): SetIsGamePausedAction => ({
  type: SET_IS_GAME_PAUSED,
  payload: {
    isGamePaused,
  },
});

export const setUnderwaterStage = (stage: Stage): SetUnderwaterStageAction => ({
  type: SET_UNDERWATER_STAGE,
  payload: {
    stage,
  },
});

export const setUnderwaterIntro = (): ThunkAction => dispatch => {
  dispatch(setUnderwaterStage(Stage.Intro));
};

export const setUnderwaterStarter = (): ThunkAction => dispatch => {
  dispatch(setUnderwaterStage(Stage.Starter));
};

export const setUnderwaterGame = (): ThunkAction => dispatch => {
  dispatch(setIsGamePaused(false));
  dispatch(setUnderwaterStage(Stage.Game));
};

export const resetGame = (): ResetGameAction => ({
  type: RESET_GAME,
});
