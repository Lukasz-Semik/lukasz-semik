import {
  SET_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
} from './actionTypes';
import { Stage } from './types';
import { getIsGamePaused } from './selectors';
import { ThunkAction } from '../types';

export const substractHealthPoints = (value: number) => ({
  type: SET_HEALTH_POINTS,
  payload: {
    value,
  },
});

export const setIsGamePaused = (isGamePaused: boolean) => ({
  type: SET_IS_GAME_PAUSED,
  payload: {
    isGamePaused,
  },
});

export const setUnderwaterStage = (stage: Stage) => ({
  type: SET_UNDERWATER_STAGE,
  payload: {
    stage,
  },
});

export const setUnderwaterIntro = (): ThunkAction => (dispatch, getState) => {
  if (getIsGamePaused(getState())) {
    dispatch(setIsGamePaused(false));
  }

  dispatch(setUnderwaterStage(Stage.Intro));
};

export const setUnderwaterStarter = (): ThunkAction => dispatch => {
  dispatch(setUnderwaterStage(Stage.Starter));
};

export const setUnderwaterGame = (): ThunkAction => dispatch => {
  dispatch(setIsGamePaused(false));
  dispatch(setUnderwaterStage(Stage.Game));
};
