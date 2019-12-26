import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

import { AppState } from '../types';
import { Stage } from './types';

export const getUnderwaterState = (state: AppState) => state.underwater;

export const getIsGamePaused = createSelector(
  getUnderwaterState,
  underwater => underwater.isGamePaused
);

export const useGetIsGamePaused = () => useSelector(getIsGamePaused);

export const getUnderwaterStage = createSelector(
  getUnderwaterState,
  underwater => underwater.stage
);

export const getIsUnderwaterIntro = createSelector(
  getUnderwaterStage,
  stage => stage === Stage.Intro
);

export const useGetIsUnderwaterIntro = () => useSelector(getIsUnderwaterIntro);

export const getIsUnderwaterStarter = createSelector(
  getUnderwaterStage,
  stage => stage === Stage.Starter
);

export const useGetIsUnderwaterStarter = () =>
  useSelector(getIsUnderwaterStarter);

export const getIsUnderwaterGame = createSelector(
  getUnderwaterStage,
  stage => stage === Stage.Game
);

export const useGetIsUnderwaterGame = () => useSelector(getIsUnderwaterGame);

export const getHealthPoints = createSelector(
  getUnderwaterState,
  underwater => underwater.healthPoints
);

export const useGetHealthPoints = () => useSelector(getHealthPoints);

export const getScore = createSelector(
  getUnderwaterState,
  underwater => underwater.score
);

export const useGetScore = () => useSelector(getScore);
