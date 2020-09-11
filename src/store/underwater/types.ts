import { Action } from 'redux';

import {
  ADD_SCORE,
  CHANGE_HEALTH_POINTS,
  RESET_GAME,
  SET_IS_GAME_PAUSED,
  SET_UNDERWATER_STAGE,
} from './actionTypes';

// eslint-disable-next-line no-shadow
export enum Stage {
  Intro = 'intro',
  Starter = 'starter',
  Game = 'game',
}

export interface UnderwaterState {
  healthPoints: number;
  score: number;
  stage: Stage;
  isGamePaused: boolean;
}

export interface ChangeHealthPointsAction
  extends Action<typeof CHANGE_HEALTH_POINTS> {
  payload: {
    value: number;
  };
}

export interface AddScore extends Action<typeof ADD_SCORE> {
  payload: {
    value: number;
  };
}

export interface SetIsGamePausedAction
  extends Action<typeof SET_IS_GAME_PAUSED> {
  payload: {
    isGamePaused: boolean;
  };
}

export interface SetUnderwaterStageAction
  extends Action<typeof SET_UNDERWATER_STAGE> {
  payload: {
    stage: Stage;
  };
}

export type ResetGameAction = Action<typeof RESET_GAME>;

export type UnderwaterActionType =
  | ChangeHealthPointsAction
  | AddScore
  | SetIsGamePausedAction
  | SetUnderwaterStageAction
  | ResetGameAction;
