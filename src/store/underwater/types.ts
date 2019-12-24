import { Action } from 'redux';

import {
  SUBSTRACT_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
} from './actionTypes';

export enum Stage {
  Intro = 'intro',
  Starter = 'starter',
  Game = 'game',
}

export interface UnderwaterState {
  healthPoints: number;
  stage: Stage;
  isGamePaused: boolean;
}

export interface SubstractHealthPointsAction
  extends Action<typeof SUBSTRACT_HEALTH_POINTS> {
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

export type UnderwaterActionType =
  | SubstractHealthPointsAction
  | SetIsGamePausedAction
  | SetUnderwaterStageAction;
