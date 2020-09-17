import type { ThunkAction } from '../types';
import {
  ADD_SCORE,
  CHANGE_HEALTH_POINTS,
  RESET_GAME,
  SET_IS_GAME_PAUSED,
  SET_UNDERWATER_STAGE,
} from './actionTypes';
import {
  AddScore,
  ChangeHealthPointsAction,
  ResetGameAction,
  SetIsGamePausedAction,
  SetUnderwaterStageAction,
  Stage,
} from './types';

export const changeHealthPoints = (
  value: number
): ChangeHealthPointsAction => ({
  type: CHANGE_HEALTH_POINTS,
  payload: {
    value,
  },
});

export const addScore = (value: number): AddScore => ({
  type: ADD_SCORE,
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

export const resetGame = (): ResetGameAction => ({
  type: RESET_GAME,
});

export const setUnderwaterIntro = (): ThunkAction => dispatch => {
  dispatch(setUnderwaterStage(Stage.Intro));
};

export const setUnderwaterStarter = (): ThunkAction => dispatch => {
  dispatch(setUnderwaterStage(Stage.Starter));
};

export const setUnderwaterGame = (): ThunkAction => dispatch => {
  dispatch(resetGame());
  dispatch(setUnderwaterStage(Stage.Game));
};
