import {
  CHANGE_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
  RESET_GAME,
  ADD_SCORE,
} from './actionTypes';
import {
  Stage,
  ChangeHealthPointsAction,
  SetIsGamePausedAction,
  SetUnderwaterStageAction,
  ResetGameAction,
  AddScore,
} from './types';
import { ThunkAction } from '../types';

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
